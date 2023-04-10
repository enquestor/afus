import { Test, TestingModule } from '@nestjs/testing';
import { ShortService } from './short.service';
import { customAlphabet } from 'nanoid';
import { Repository } from 'typeorm';
import { Short } from './short.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

jest.mock('nanoid', () => ({
  customAlphabet: jest.fn(),
}));
jest.mock('class-validator');

describe('ShortService', () => {
  let service: ShortService;
  let repository: Repository<Short>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShortService,
        {
          provide: getRepositoryToken(Short),
          useValue: {
            findOneBy: jest.fn(),
            create: jest.fn(),
            save: jest.fn().mockResolvedValue(null),
          },
        },
      ],
    }).compile();

    service = module.get<ShortService>(ShortService);
    repository = module.get<Repository<Short>>(getRepositoryToken(Short));
  });

  it('test createShort', async () => {
    (customAlphabet as jest.Mock).mockReturnValue(() => 'abc123');

    const code = await service.createShort('https://enquestor.com');
    expect(code).toBe('abc123');
  });

  it('test createShort database insert error', async () => {
    (repository.save as jest.Mock).mockRejectedValue(new Error('error'));

    await service.createShort('https://enquestor.com').catch((error) => {
      expect(error).toBeInstanceOf(HttpException);
      expect((error as HttpException).getStatus()).toBe(
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
    expect.assertions(2);
  });

  it('test getUrl', async () => {
    (repository.findOneBy as jest.Mock).mockResolvedValue({
      url: 'https://enquestor.com',
    });

    const url = await service.getUrl('abc123');
    expect(url).toBe('https://enquestor.com');
  });

  it('test getUrl database error', async () => {
    (repository.findOneBy as jest.Mock).mockRejectedValue(new Error('error'));

    await service.getUrl('abc123').catch((error) => {
      expect(error).toBeInstanceOf(HttpException);
      expect((error as HttpException).getStatus()).toBe(
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
    expect.assertions(2);
  });

  it('test getUrl not found', async () => {
    (repository.findOneBy as jest.Mock).mockResolvedValue(null);

    await service.getUrl('abc123').catch((error) => {
      expect(error).toBeInstanceOf(HttpException);
      expect((error as HttpException).getStatus()).toBe(HttpStatus.NOT_FOUND);
    });
    expect.assertions(2);
  });
});

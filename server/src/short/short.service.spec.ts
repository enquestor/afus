import { Test, TestingModule } from '@nestjs/testing';
import { ShortService } from './short.service';

describe('UrlService', () => {
  let service: ShortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortService],
    }).compile();

    service = module.get<ShortService>(ShortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

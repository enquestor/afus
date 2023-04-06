import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Short } from './short.entity';
import { customAlphabet } from 'nanoid';
import { validate } from 'class-validator';

@Injectable()
export class ShortService {
  constructor(
    @InjectRepository(Short)
    private shortRepository: Repository<Short>,
  ) {}

  async getUrl(code: string): Promise<string> {
    const short = await this.shortRepository.findOneBy({ code }).catch(() => {
      throw new HttpException(
        'Error getting from database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (short) {
      return short.url;
    } else {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async createUrl(url: string): Promise<string> {
    const nanoId = customAlphabet(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      6,
    );

    const code = nanoId();
    const short = this.shortRepository.create({
      code,
      url,
    });
    await validate(short).then((errors) => {
      if (errors.length > 0) {
        throw new HttpException('Invalid URL', HttpStatus.BAD_REQUEST);
      }
    });

    await this.shortRepository.save(short).catch(() => {
      throw new HttpException(
        'Error inserting to database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    return code;
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Short } from './short.entity';
import { ShortService } from './short.service';

@Module({
  imports: [TypeOrmModule.forFeature([Short])],
  providers: [ShortService],
  exports: [ShortService],
})
export class ShortModule {}

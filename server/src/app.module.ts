import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Short, ShortModule } from './short';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST || 'postgres',
      port: parseInt(process.env.PG_PORT || '5432'),
      username: process.env.POSTGRES_USER || 'afus',
      password: process.env.POSTGRES_PASSWORD || 'afus',
      database: process.env.POSTGRES_DB || 'afus',
      entities: [Short],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    ShortModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

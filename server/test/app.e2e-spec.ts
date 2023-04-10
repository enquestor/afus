import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(() => app.close());

  it('/ (POST)', async () => {
    const createShortDto = {
      url: 'http://enquestor.com',
    };

    const response = await request(app.getHttpServer())
      .post('/')
      .send(createShortDto);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('code');
    expect(response.body.code).toHaveLength(6);
  });

  test.each([
    '://example.com',
    'http:/example.com:abc',
    'http:/example.com',
    'http://-example.com',
    'http://example-.com',
    'ftp://example.com',
    'http://example.com.',
    'http://.example.com',
    'http://example..com',
    'http://localhost:abc',
    'http://example.com:80:8080',
  ])('/ (POST) invalid url %s', async (url) => {
    const createShortDto = { url };

    await request(app.getHttpServer())
      .post('/')
      .send(createShortDto)
      .expect(400);
  });

  test.each([
    process.env.AFUS_URL,
    process.env.AFUS_URL + '/afus',
    process.env.AFUS_URL + '?=afus',
  ])('/ (POST) afus url %s', async (url) => {
    const createShortDto = { url };

    await request(app.getHttpServer())
      .post('/')
      .send(createShortDto)
      .expect(400);
  });

  it('/:code (GET)', async () => {
    const createShortDto = { url: 'http://enquestor.com' };

    const response = await request(app.getHttpServer())
      .post('/')
      .send(createShortDto);

    const code = response.body.code;

    await request(app.getHttpServer())
      .get(`/${code}`)
      .expect(302)
      .expect('Location', createShortDto.url);
  });

  it('/:code (GET) not found', async () => {
    await request(app.getHttpServer()).get('/notfound').expect(404);
  });
});

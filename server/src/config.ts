export default () => ({
  DEV: process.env.NODE_ENV === 'development',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
  POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || '5432'),
  POSTGRES_USER: process.env.POSTGRES_USER || 'afus',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'afus',
  POSTGRES_DB: process.env.POSTGRES_DB || 'afus',
  TTL: parseInt(process.env.TTL || '60'),
  LIMIT: parseInt(process.env.LIMIT || '6'),
});

export default () => {
  const config = {
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
    POSTGRES_PORT: process.env.POSTGRES_PORT || '5432',
    POSTGRES_USER: process.env.POSTGRES_USER || 'afus',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'afus',
    POSTGRES_DB: process.env.POSTGRES_DB || 'afus',
    SYNC: typeof process.env.SYNC !== 'undefined' ? process.env.SYNC : 'false',
    TTL: process.env.TTL || '60',
    LIMIT: process.env.LIMIT || '6',
  };
  console.log(config);

  return config;
};

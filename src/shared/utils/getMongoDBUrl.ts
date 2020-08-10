import config from 'config';

export function getMongoDBUrl(): string {
  let dbUrl: string = config.get('db.url');
  const dbName: string = config.get('db.name');
  const dbPassword: string = config.get('db.password');

  dbUrl = dbUrl.replace('<dbname>', dbName);
  dbUrl = dbUrl.replace('<password>', dbPassword);

  return dbUrl;
}

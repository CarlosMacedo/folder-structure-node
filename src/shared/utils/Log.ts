import { createLogger, Logger } from 'winston';
import { MongoDBTransportInstance } from 'winston-mongodb';
const {
  MongoDB
}: { MongoDB: MongoDBTransportInstance } = require('winston-mongodb');

export class Log {
  private logger: Logger;

  constructor(dbUrl: string, collectionName: string) {
    this.logger = this.newLogger(dbUrl, collectionName);
  }

  public saveLog(data: any): void {
    this.logger.error(data);
  }

  private newLogger(dbUrl: string, collectionName: string): Logger {
    return createLogger({
      level: 'error',
      transports: [
        new MongoDB({
          capped: true,
          db: dbUrl,
          name: collectionName,
          collection: collectionName,
          options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        })
      ]
    });
  }
}

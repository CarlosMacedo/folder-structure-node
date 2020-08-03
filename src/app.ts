import express from 'express'
import initMiddlewares from './middlewares.init'
import initDatabases from './databases.init'
import initRoutes from './routes.init'

class App {
    public app: express.Application;

    public constructor () {
      this.app = express()
      this.init()
    }

    private init () {
      initMiddlewares(this.app)
      initDatabases()
      initRoutes(this.app)
    }
}

export default new App().app

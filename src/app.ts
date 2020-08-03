import express from 'express'
import cors from 'cors'
// import mongoose from 'mongoose'

class App {
    public express: express.Application;

    public constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares () {
      this.express.use(express.json())
      this.express.use(cors()) // improving this, is a mess
    }

    private database () {
    //   mongoose.connect()
    }

    private routes () {
      this.express.get('/', (req, res) => {
        return res.send('Hello World!!!')
      })
    }
}

export default new App().express

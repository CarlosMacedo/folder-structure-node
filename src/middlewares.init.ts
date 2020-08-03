import express from 'express'
import cors from 'cors'

export default function initMiddlewares (app: express.Application): void {
  app.use(express.json())
  app.use(cors())
}

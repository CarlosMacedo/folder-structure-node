import express from 'express'

export default function initRoutes (app: express.Application): void {
  app.get('/', (req, res) => {
    return res.send('Hello World!')
  })
}

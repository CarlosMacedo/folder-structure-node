import express, { Router } from 'express'
import { getMe } from './me'

export function createMeRouter (): Router {
  const meRouter = express.Router()

  meRouter
    .route('/')
    .get(getMe)

  return meRouter
}

import express from 'express'

export const serverStatusRouterV1 = express.Router()

serverStatusRouterV1.get('/', (_req, res) => res.sendStatus(200))

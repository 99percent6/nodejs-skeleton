import express from 'express'
import cors from 'cors'
import config from 'config'
import { Cors } from './middlewares'
import routes from './routes'
import { logger } from './lib'

const app = express()
app.use(express.json({
  limit: config.get('bodyParser.limit'),
}))
app.use(express.urlencoded({ extended: true }))
app.use(cors(Cors.getOptions()))
app.use('/api', routes({ config }))

const start = () => {
  let exited = false
  const port = config.get<string>('server.port')
  const host = config.get<string>('server.host')
  const server = app.listen(parseInt(port, 10), host, () => {
    logger.log(`Process is running. Listening http://${host}:${port}.`)
  })

  const shutdown = async () => {
    if (exited) return
    exited = true

    // clean up all connections
    logger.log('Process is exiting')
    server.close(() => {
      logger.log('Http server closed.')
      process.exit(0)
    })
  }

  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)
}

start()

export { app }

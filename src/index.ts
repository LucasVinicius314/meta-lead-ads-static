import * as express from 'express'

const port = process.env.PORT

const server = express()

server.use(express.static('public'))

server.get('/app-id', (req, res) => {
  const appId = process.env.APP_ID

  res.status(200).send(appId)
})

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

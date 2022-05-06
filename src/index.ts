import * as express from 'express'

import { json, raw, text, urlencoded } from 'body-parser'

const port = process.env.PORT

const server = express()

server.use(json())
server.use(raw())
server.use(text())
server.use(urlencoded({ extended: true }))

server.use(express.static('public'))

server.get('/app-id', (req, res) => {
  const appId = process.env.APP_ID

  res.status(200).send(appId)
})

server.all('/login', (req, res) => {
  const headers = req.headers
  const body = req.body

  console.log(headers)
  console.log(body)

  res.status(200).send()
})

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

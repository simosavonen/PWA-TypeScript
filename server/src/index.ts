if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as fetch from 'node-fetch'

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
const app = express()

app.use(bodyParser.json())
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

const FORECAST_DELAY = 0

const API_KEY = process.env.DARKSKY_API_KEY
const BASE_URL = `https://api.darksky.net/forecast`

const fakeForecast = require('./fakeData')

const generateFakeForecast = (location: string) => {
  location = location || '60.4513427,22.2681291'
  const commaAt = location.indexOf(',')

  // Create a new copy of the forecast
  const result = Object.assign({}, fakeForecast)
  result.latitude = parseFloat(location.substr(0, commaAt))
  result.longitude = parseFloat(location.substr(commaAt + 1))
  return result
}

const getForecast = (request: express.Request, response: express.Response) => {
  const location = request.params.location || '60.4513427,22.2681291'
  const url = `${BASE_URL}/${API_KEY}/${location}`
  fetch.default(url).then((response) => {
    return response.json()
  }).then((data) => {
    setTimeout(() => {
      response.json(data)
    }, FORECAST_DELAY)
  }).catch((err) => {
    console.error('Dark Sky API Error:', err.message)
    response.json(generateFakeForecast(location))
  })
}


app.get('/forecast/:location', getForecast)
app.get('/forecast/', getForecast)
app.get('/forecast', getForecast)

app.use(express.static('public'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`)
})

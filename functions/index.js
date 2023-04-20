const express = require('express')
const functions = require('firebase-functions')
const admin = require('firebase-admin')

const googleTrends = require('google-trends-api')

const app = express()

app.use(express.json())

app.get('/a', async (req, res) => {
  res.status(200).send(dailyTrend())
})

const dailyTrend = () => {
  googleTrends.dailyTrends(
    {
      trendDate: new Date(),
      geo: 'KR',
    },
    function (err, results) {
      if (err) {
        console.log(err)
      } else {
        fs.writeFile('data/today.json', results, 'utf8', function (error) {
          console.log('write end')
        })
      }
    }
  )
}

exports.googleTrends = functions.region('asia-northeast3').https.onRequest(app)

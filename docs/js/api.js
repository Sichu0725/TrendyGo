console.log(1)

import { fs } from 'node:fs'
import { googleTrends } from 'node:google-trends-api'

export const dailyTrend = () => {
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

googleTrends
  .relatedQueries({ keyword: 'Westminster Dog Show' })
  .then((res) => {
    // console.log(res)
    fs.writeFile('data/data.json', res, 'utf8', function (error) {
      console.log('write end')
    })
  })
  .catch((err) => {
    console.log(err)
  })

googleTrends
  .interestByRegion({
    keyword: '콘테',
    startTime: new Date(),
    endTime: new Date('2023-03-23'),
    geo: 'KR',
  })
  .then((res) => {
    console.log(res)
    fs.writeFile('data/data2.json', res, 'utf8', function (error) {
      console.log('write end')
    })
  })
  .catch((err) => {
    console.log(err)
  })

// googleTrends
//   .interestOverTime({ keyword: 'game', geo: 'US' })
//   .then(function (results) {
//     console.log('These results are awesome', results)

// fs.writeFile('data.json', results, 'utf8', function (error) {
//   console.log('write end')
// })
//   })
//   .catch(function (err) {
//     console.error('Oh no there was an error', err)
//   })

// googleTrends.realTimeTrends(
//   {
//     geo: 'KR',
//     category: 'all',
//   },
//   function (err, results) {
//     if (err) {
//       console.log(1, err)
//     } else {
//       console.log(results)

//       fs.writeFile('data.json', results, 'utf8', function (error) {
//         console.log('write end')
//       })
//     }
//   }
// )

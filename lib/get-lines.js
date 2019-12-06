const got = require('got')
const getYellowLine = require('./get-yellow-line')

module.exports = () => {
  const apiUrl =
    'http://www.metro.sp.gov.br/Sistemas/direto-do-metro-via4/diretodoMetroHome.aspx'

  return got(apiUrl).then(({ body }) => {
    if (body) {
      const begin = body.indexOf('objArrLinhas')
      const end = body.indexOf('var objArrL4') - 7
      const str = body.slice(begin, end)
      const obj = str.replace('objArrLinhas = ', '')
      const lines = JSON.parse(obj)
      const yellowLine = JSON.parse(getYellowLine(body))
      const result = lines.concat(yellowLine)

      return result
    }

    throw new TypeError('Please, try again in a few minutes')
  })
}

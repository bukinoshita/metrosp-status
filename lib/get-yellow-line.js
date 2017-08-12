'use strict'

module.exports = body => {
  const begin = body.indexOf('objArrL4')
  const end = body.indexOf('"codigo" : "4"') + 15
  const str = body.substring(begin, end)
  const obj = str.replace('objArrL4 = [', '')

  return obj
}

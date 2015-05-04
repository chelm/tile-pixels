var test = require('tape')

var tilePixel = require('../')

test('convert lat lon to tile pixels', function (t) {
  tilePixel(-104, 40, 0, 10, function (err, pixels) {
    if (err) throw err
    console.log(err, pixels)
    t.ok('callback called...')
    t.end()
  })
})

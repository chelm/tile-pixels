var tilebelt = require('tilebelt')

module.exports = function tilePixel (lon, lat, minz, maxz, callback) {
  var minZoom = minz
  var maxZoom = maxz
  var agg = {}

  for (var z = minZoom; z < maxZoom; z++) {
    var tile = tilebelt.pointToTile(lon, lat, z)
    var bbox = tilebelt.tileToBBOX(tile)
    var pxy = project(lon, lat, bbox, 256, 256)

    agg[z] = {
      tile: tile,
      px: pxy[0],
      py: pxy[1]
    }

  }
  callback(null, agg)
}

function project (lon, lat, extent, width, height) {
  var xFactor = width / (extent[2] - extent[0])
  var yFactor = height / (extent[3] - extent[1])

  var x = (lon - extent[0]) * xFactor
  var y = (extent[3] - lat) * yFactor
  return [~~x, ~~y]
}

# tile-pixels

A node module for determining the tile-xy of a point across multiple zoom levels.

## Usage 

```
npm install tile-pixels
```

```javascript
var tilePixels = require('tile-pixels')

// takes in lat, lon, minz, maxz, callback
tilePixels(-104, 40, 0, 10, function (err, pixels) {
  console.log(err, pixels)
  /*
  { '0': { tile: [ 0, 0, 0 ], px: 54, py: 67 },
  '1': { tile: [ 0, 0, 1 ], px: 108, py: 135 },
  '2': { tile: [ 0, 1, 2 ], px: 216, py: 102 },
  '3': { tile: [ 1, 3, 3 ], px: 176, py: 6 },
  '4': { tile: [ 3, 6, 4 ], px: 96, py: 13 },
  '5': { tile: [ 6, 12, 5 ], px: 193, py: 27 },
  '6': { tile: [ 13, 24, 6 ], px: 130, py: 57 },
  '7': { tile: [ 27, 48, 7 ], px: 5, py: 116 },
  '8': { tile: [ 54, 96, 8 ], px: 11, py: 234 },
  '9': { tile: [ 108, 193, 9 ], px: 22, py: 212 } }
  */
})

```

## License

[ISC](license.txt)

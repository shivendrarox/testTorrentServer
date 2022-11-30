const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const magnetURI = 'magnet:?xt=urn:btih:7BHC6B7RNTJ6Z2S2D7PN3IW2EDFR6EXT&dn=2022-09-22-raspios-bullseye-arm64-lite.img.xz&xl=302978228&tr=http%3A%2F%2Ftracker.raspberrypi.org%3A6969%2Fannounce'

client.add(magnetURI, { path: './downloads' }, function (torrent) {
  torrent.on('done', function () {
    console.log('torrent download finished')
  })
})
var test = require('tape')
var h = require('virtual-dom/h')
var createImage = require('../image')

test('create an editable image field', function (t) {
  var field = createImage(h, {
    value: 'https://g.twimg.com/Twitter_logo_blue.png'
  })
  t.equal(field.tagName, 'INPUT')
  t.equal(field.properties.src, 'https://g.twimg.com/Twitter_logo_blue.png')
  t.end()
})

test('create a static image field', function (t) {
  var field = createImage(h, {
    value: 'https://g.twimg.com/Twitter_logo_blue.png',
    editable: false
  })
  t.equal(field.tagName, 'IMG')
  t.equal(field.properties.src, 'https://g.twimg.com/Twitter_logo_blue.png')
  t.end()
})

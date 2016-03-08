var test = require('tape')
var h = require('virtual-dom/h')
var geoJSON = require('../geoJSON')

test('create an editable geoJSON field', function (t) {
  var field = geoJSON(h, { value: 'example' })
  t.equal(field.tagName, 'DIV')
  t.end()
})

test('create a static geoJSON field', function (t) {
  var field = geoJSON(h, { value: 'example' })
  t.equal(field.tagName, 'DIV')
  t.end()
})

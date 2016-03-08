var test = require('tape')
var h = require('virtual-dom/h')
var createField = require('../url')

test('create an editable url field', function (t) {
  var field = createField(h, { value: 'example.com' })
  t.equal(field.tagName, 'INPUT')
  t.equal(field.properties.href, 'http://example.com')
  t.end()
})

test('create a static url field', function (t) {
  var field = createField(h, {
    value: 'example.com',
    editable: false
  })
  t.equal(field.tagName, 'A')
  t.equal(field.properties.href, 'http://example.com')
  t.end()
})

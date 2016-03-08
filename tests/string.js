var test = require('tape')
var h = require('virtual-dom/h')
var stringField = require('../string')

test('create an editable string field', function (t) {
  var field = stringField(h, { value: 'example' })
  t.equal(field.tagName, 'TEXTAREA')
  t.end()
})

test('create a static string field', function (t) {
  var field = stringField(h, { value: 'example', editable: false })
  t.equal(field.tagName, 'DIV')
  t.end()
})

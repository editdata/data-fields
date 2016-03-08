var test = require('tape')
var h = require('virtual-dom/h')
var numberField = require('../number')

test('create an editable number field', function (t) {
  var field = numberField(h, { value: 1000 })
  t.equal(field.tagName, 'INPUT')
  t.end()
})

test('create a static number field', function (t) {
  var field = numberField(h, { value: 1000, editable: false })
  t.equal(field.tagName, 'DIV')
  t.end()
})

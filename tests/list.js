var test = require('tape')
var h = require('virtual-dom/h')
var createList = require('../list')

test('create an input field', function (t) {
  var field = createList(h, { value: ['a', 'b', 'c'] })
  t.equal(field.tagName, 'DIV')
  t.end()
})

test('create a display field', function (t) {
  var field = createList(h, {
    value: ['a', 'b', 'c'],
    editable: false
  })
  t.equal(field.tagName, 'UL')
  t.end()
})

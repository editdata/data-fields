var test = require('tape')
var createClassName = require('../utils/classname')

test('create a classname', function (t) {
  var className = createClassName({
    dataType: 'string',
    editable: true,
    size: 'normal'
  })
  t.equal(className, 'data-field data-field-string data-field-editable data-field-editable-normal')
  t.end()
})

test('require type', function (t) {
  try {
    createClassName({
      size: 'normal',
      editable: false
    })
  } catch (err) {
    t.equal(err.message, 'options.dataType property required')
  }
  t.end()
})

test('require editable', function (t) {
  try {
    createClassName({
      dataType: 'string',
      size: 'normal'
    })
  } catch (err) {
    t.equal(err.message, 'options.editable property required')
  }
  t.end()
})

test('require size', function (t) {
  try {
    createClassName({
      dataType: 'string',
      editable: false
    })
  } catch (err) {
    t.equal(err.message, 'options.size property required')
  }
  t.end()
})

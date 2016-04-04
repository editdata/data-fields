var extend = require('xtend')
var convert = require('object-array-converter')
var createClassName = require('data-field-classname')
var listEditor = require('list-editor')
var isarray = require('isarray')

var defaultProps = {
  tagName: 'div',
  editable: true,
  size: 'normal',
  fieldType: 'input',
  attributes: {}
}

/**
* Create a virtual-dom list (object or array) data-field for use with [data-ui](https://github.com/editdata/data-ui).
* @param {function} h virtual-dom `h` function
* @param {Object} properties an options object, including any properties you can pass to virtual-dom/h
* @param {Boolean} properties.display true for display mode, default is false for input mode
* @param {Boolean} properties.keys, false for array mode, default is true for object mode
* @param {Object} properties.value an array or flat object
* @param {Array} properties.value an array or flat object
* @param {Object} value an array or flat object
* @param {Array} value an array or flat object
* @returns virtual-dom tree
* @name createListField
* @example
* var createListField = require('data-field-string')
* var field = createListField()
* var tree = field.render(h, properties, ['a', 'b', 'c'])
*/
module.exports = function createListField (h, options, value) {
  options = extend(defaultProps, options)
  var keys = options.keys
  value = value || options.value || []
  options.items = value || options.items
  options.dataType = 'list'

  if (isarray(value)) value = convert.toObject(value)

  var items = []
  if (!options.editable) {
    options.tagName = 'ul'
    items = Object.keys(options.items).map(function (key) {
      var item = options.items[key]
      var el = []
      if (keys) el.push(h('span.data-field-list-key', key + ': '))
      el.push(h('span.data-field-list-value', item))
      return h('li.data-field-list-item', el)
    })
  } else {
    items = [listEditor(h, options)]
  }

  options.className = createClassName(options)
  return h(options.tagName, options, items)
}

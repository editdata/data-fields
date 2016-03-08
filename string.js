var extend = require('xtend')
var createClassName = require('./utils/classname')

var defaultProps = {
  tagName: 'textarea',
  editable: true,
  size: 'normal',
  attributes: {}
}

/**
* Create a virtual-dom string data-field for use with [data-ui](https://github.com/editdata/data-ui).
* @param {Function} h virtual-dom `h` function
* @param {Object} options Options object, including any properties you can pass to virtual-dom/h
* @param {Boolean} options.editable false for a static field, default is true for an editable field
* @param {String} options.value any string
* @returns virtual-dom tree
* @name createStringField
* @example
* var createStringField = require('data-field-string')
* var field = createStringField(h, { value: 'example string' })
*/
module.exports = function createStringField (h, options, value) {
  options = extend(defaultProps, options)
  options.value = value || options.value
  options.dataType = 'string'

  if (!options.editable) options.tagName = 'div'
  if (options.size === 'small') options.attributes.rows = 1

  options.className = createClassName(options)
  return h(options.tagName, options, String(options.value))
}

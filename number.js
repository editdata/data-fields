var extend = require('xtend')
var createClassName = require('./utils/classname')

var defaultProps = {
  tagName: 'input',
  attributes: {},
  editable: true,
  size: 'normal'
}

/**
* Create a virtual-dom number data-field for use with [data-ui](https://github.com/editdata/data-ui).
* @param {function} h virtual-dom `h` function
* @param {Object} options Options object, including any properties you can pass to virtual-dom/h
* @param {Boolean} options.editable false for static mode, default is true for editable mode
* @param {String} options.value any number
* @returns virtual-dom tree
* @name createStringField
* @example
* var createStringField = require('data-field-string')
* var field = createStringField(h, { value: 1000 })
*/

module.exports = function NumberField (h, options, value) {
  options = extend(defaultProps, options)
  options.value = value || options.value
  options.type = options.dataType = 'number'
  options.fieldType = 'input'
  options.className = createClassName(options)
  delete options.size
  if (!options.editable) options.tagName = 'div'
  return h(options.tagName, options, options.value)
}

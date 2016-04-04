var createClassName = require('./utils/classname')
var extend = require('xtend')
var addhttp = require('addhttp')

var defaultProps = {
  tagName: 'input',
  editable: true,
  size: 'normal',
  attributes: {}
}

/**
* Create a virtual-dom url data-field for use with [data-ui](https://github.com/editdata/data-ui).
* @param {Object} options an options object, including any properties you can pass to virtual-dom/h
* @param {Boolean} options.display true for display mode, default is false for input mode
* @returns field
* @name createURLField
* @example
* var createURLField = require('data-field-url')
* var field = createURLField()
* var vtree = field.render(h, {}, 'http://example.com')
*/
module.exports = function URLField (h, options, value) {
  options = extend(defaultProps, options)
  options.value = value || options.value
  options.dataType = 'url'
  options.href = options.value ? addhttp(options.href || options.value) : null
  options.value = options.href
  options.className = createClassName(options)
  delete options.size

  if (!options.editable) options.tagName = 'a'

  return h(options.tagName, options, options.href)
}

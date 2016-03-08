var addhttp = require('addhttp')
var extend = require('xtend')
var createClassName = require('./utils/classname')

var defaultProps = {
  tagName: 'input',
  editable: true,
  size: 'normal',
  attributes: {}
}

/**
* Render a virtual-dom image data-field.
* @param {function} h virtual-dom `h` function
* @param {Object} options options object for `h`
* @param {Boolean} options.display false for static mode, default is true for editable mode
* @param {String} options.value any image url
* @returns virtual-dom tree
* @name createImageField
* @example
* var createImageField = require('data-field-image')
* var field = createImageField(h, { value: 'http://example.com/example.jpg' })
*/
module.exports = function createImageField (h, options, value) {
  options = extend(defaultProps, options)
  options.dataType = 'image'
  options.src = addhttp(value || options.src || options.value)
  options.className = createClassName(options)
  delete options.size

  if (!options.editable) options.tagName = 'img'

  return h(options.tagName, options, options.src)
}

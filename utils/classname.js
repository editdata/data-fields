module.exports = function createClassName (options) {
  if (!options.hasOwnProperty('dataType')) throw Error('options.dataType property required')
  if (!options.hasOwnProperty('editable')) throw Error('options.editable property required')
  if (!options.hasOwnProperty('size')) throw Error('options.size property required')

  var className = 'data-field'
  className += ' data-field-' + options.dataType
  if (options.editable) {
    className += ' data-field-editable data-field-editable-' + options.size
  }
  if (options.className) className += ' ' + options.className
  return className
}

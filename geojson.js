var extend = require('xtend')
var createMap = require('./utils/map')
var createClassName = require('./utils/classname')

var defaultProps = {
  tagName: 'div',
  editable: true,
  size: 'normal',
  attributes: {}
}

/**
Create a virtual-dom geojson data-field for use with [data-ui](https://github.com/editdata/data-ui).
* @name createGeoJSONField
* @param {Object} options an options object, including any properties you can pass to leaflet & virtual-dom/h
* @param {String} options.accessToken mapbox access token for using their API
* @param {Object} options.tileLayer Leaflet tilelayer, default is osm tiles
* @param {String} options.imagePath path to leaflet images
* @param {Boolean} options.editable false for static mode, default is true for editable mode
* @returns field
* @example
* var createGeoJSONField = require('data-field-geojson')
* var field = createGeoJSONField(h, options, geojsonObject)
*/
module.exports = function createGeoJSONField (h, options, geojsonObject) {
  options = extend(defaultProps, options)
  options.dataType = 'geojson'
  var value = geojsonObject || options.value
  var map = createMap(value, options)
  options.className = createClassName(options)
  return h(options.tagName, options, map)
}

# data-fields

Render fields for various types of input.

[![npm](https://img.shields.io/npm/v/data-fields.svg)](http://npmjs.com/data-fields)

## Installation

```sh
npm install data-fields --save
```

## API

* [string](#string)
* [number](#number)
* [url](#url)
* [list](#list)
* [image](#image)
* [geoJSON](#geoJSON)

### <a name="string"></a> fields.string(h, options[, value])

Create a field to display text.  If `editable` is set to true the text will be placed inside a `textarea` element.

**Arguments**
  * `h` - A `hyperscript` style DOM builder
  * `options` - Options object.
    * `options.editable` - `Boolean` - Set whether the value is editable or not. Defaults to true.
    * `options.size` - `String` - Set the size of the field. Defaults to `normal`, other possible choices are `small` and `large`.
    * `options.value` - `String` - The value of the field.
    * `options.*` - Extra properties will be passed to the DOM builder when creating the field.
  * `value` - `String` - Value of the field.  Takes precedence over `options.value`

**Example**

```js
var fields = require('data-fields')
var h = require('virtual-dom/h')
var stringField = fields.string(h, { className: 'MyField' }, 'Some string')
```

### <a name="number"></a> fields.number(h, options[, value])

Create a field to display a number.  If `editable` is set to true the value will be placed inside an `input` element with `type` set to `number`.

**Arguments**
  * `h` - A `hyperscript` style DOM builder
  * `options` - Options object.
    * `options.editable` - `Boolean` - Set whether the value is editable or not. Defaults to true.
    * `options.value` - `Number` - The value of the field.
    * `options.*` - Extra properties will be passed to the DOM builder when creating the field.
  * `value` - `Number` - Value of the field.  Takes precedence over `options.value`

**Example**

```js
var fields = require('data-fields')
var h = require('virtual-dom/h')
var numberField = fields.number(h, { className: 'MyField' }, 1000)
```

### <a name="url"></a> fields.url(h, options[, value])

Create a field to display a url.  If `editable` is set to true the url will be placed inside an `input` element.  If `editable` is set to false the url will be displayed as an `a` element.

**Arguments**
  * `h` - A `hyperscript` style DOM builder
  * `options` - Options object.
    * `options.editable` - `Boolean` - Set whether the value is editable or not. Defaults to true.
    * `options.value` - `String` - The value of the field.
    * `options.*` - Extra properties will be passed to the DOM builder when creating the field.
  * `value` - `String` - Value of the field.  Takes precedence over `options.value`

**Example**

```js
var fields = require('data-fields')
var h = require('virtual-dom/h')
var urlField = fields.url(h, { className: 'MyField' }, 'http://example.com')
```

### <a name="list"></a> fields.list(h, options[, value])

Create a field to display a list, either from an array or an object.  If `editable` is set to true [list-editor](https://github.com/editdata/list-editor) will be used to display the list.

**Arguments**
  * `h` - A `hyperscript` style DOM builder
  * `options` - Options object.
    * `options.editable` - `Boolean` - Set whether the value is editable or not. Defaults to true.
    * `options.value` - `Array|Object` - The value of the field.
    * `options.*` - Extra properties will be passed to the DOM builder when creating the field.
  * `value` - `Array|Object` - Value of the field.  Takes precedence over `options.value`.

**Example**

```js
var fields = require('data-fields')
var h = require('virtual-dom/h')
var listField = fields.list(h, { className: 'MyField' }, ['a', 'b', 'c'])
```

### <a name="image"></a> fields.image(h, options[, value])

Create a field to display an image.  If `editable` is set to true the image's path will be placed inside an `input` field.  If `editable` is set to false the image itself will be displayed.

**Arguments**
  * `h` - A `hyperscript` style DOM builder
  * `options` - Options object.
    * `options.editable` - `Boolean` - Set whether the value is editable or not. Defaults to true.
    * `options.value` - `String` - The value of the field.
    * `options.*` - Extra properties will be passed to the DOM builder when creating the field.
  * `value` - `String` - Value of the field.  Takes precedence over `options.value`

**Example**

```js
var fields = require('data-fields')
var h = require('virtual-dom/h')
var imageField = fields.image(h, { className: 'MyField' }, 'http://example.com/example.jpg')
```

### <a name="geoJSON"></a> fields.geoJSON(h, options[, value])

Create a field to display geoJSON data on a [leaflet](http://leafletjs.com/) map.  If `editable` is set to true the map will include drawing controls.

**Arguments**
  * `h` - A `hyperscript` style DOM builder
  * `options` - Options object.
    * `options.accessToken` - `String` - Mapbox access token if you'd like to use Mapbox.
    * `options.tileLayer` - `String` - Leaflet tile layer to use.
    * `options.imagePath` - `String` - Path to leaflet images.
    * `options.editable` - `Boolean` - Set whether the value is editable or not. Defaults to true.
    * `options.value` - `Object` - The value of the field.
    * `options.*` - Extra properties will be passed to the DOM builder when creating the field.
  * `value` - `Object` - Value of the field.  Takes precedence over `options.value`

**Example**

```js
var fields = require('data-fields')
var h = require('virtual-dom/h')

var geoJSON = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-122.33636, 47.621958]
  }
}

var geoField = fields.geoJSON(h, { className: 'MyField' }, geoJSON)
```


## Tests

```sh
npm install
npm test
```

## License

[MIT](LICENSE.md)

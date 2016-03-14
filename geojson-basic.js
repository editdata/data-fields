var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var createField = require('../geojson')

function inputField (state) {
  var field = createField(h, {
    editable: true,
    zoom: 12,
    value: state.geojson,
    center: [47.621958, -122.33636]
  })

  return field
}

function displayField (state) {
  var field = createField(h, {
    zoom: 12,
    editable: false,
    center: [47.621958, -122.33636]
  })

  // field.on('update', function (e, geojson) {
  //   console.log('update?', e, geojson)
  //   state.geojson = geojson
  //   tree.update(state)
  // })

  return field
}

function render (state) {
  return h('div.fields', [
    h('div.editable', [inputField(state)]),
    h('div.static', [displayField(state)])
  ])
}

var initialState = {
  geojson: { type: 'FeatureCollection', features: [] }
}

var tree = vraf(initialState, render, require('virtual-dom'))
document.body.querySelector('#geojson-basic').appendChild(tree.render())

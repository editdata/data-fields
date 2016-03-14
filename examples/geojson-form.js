var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var form = require('data-form')

var initialState = {
  properties: {
    location: {
      key: 'location',
      name: 'location',
      type: ['geoJSON']
    }
  },
  row: {
    value: { location: { type: 'Feature', geometry: { type: 'Point', coordinates: [-122.33636, 47.621958] } } }
  }
}

function onupdate (e, state) {
  tree.update(state)
}

function render (state) {
  state.onupdate = onupdate
  return form(h, state)
}

var tree = vraf(initialState, render, require('virtual-dom'))
document.body.querySelector('#geojson-form').appendChild(tree.render())

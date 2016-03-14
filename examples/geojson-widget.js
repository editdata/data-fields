var h = require('virtual-dom/h')
var vraf = require('virtual-raf')
var createMap = require('../utils/map')

function render (state) {
  console.log(state.geojson)
  return h('div.widget', createMap(state.geojson, {
    editable: false,
    zoom: 12,
    setView: true,
    center: [47.621958, -122.33636],
    accessToken: 'pk.eyJ1Ijoic2V0aHZpbmNlbnQiLCJhIjoiSXZZXzZnUSJ9.Nr_zKa-4Ztcmc1Ypl0k5nw',
    onclick: newPoint
  }))

  function newPoint (e) {
    console.log(e)
    state.geojson.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [e.latlng.lng, e.latlng.lat]
      }
    })
    tree.update(state)
  }
}

var initialState = {
  geojson: { type: 'FeatureCollection', features: [] }
}

var tree = vraf(initialState, render, require('virtual-dom'))
document.body.querySelector('#geojson-widget').appendChild(tree.render())

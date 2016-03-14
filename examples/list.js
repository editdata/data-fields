var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var createField = require('../list')

function inputField (state) {
  var field = createField(h, state)
  return field
}

function staticField (state) {
  var field = createField(h, {
    items: state.items,
    keys: state.keys,
    editable: false
  })

  return field
}

function render (state) {
  return h('div.fields', [
    h('div.editable', [inputField(state)]),
    h('div.static', [staticField(state)])
  ])
}

var state = {
  items: ['hi', 'ok', 'awesome'],
  keys: true
}

state.removeItem = function removeItem (e, items) {
  state.items = items
  tree.update(state)
}

state.onsubmit = function onsubmit (e, items, item) {
  state.items = items
  tree.update(state)
}

var tree = vraf(state, render, require('virtual-dom'))
document.body.querySelector('#list').appendChild(tree.render())

var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var stringField = require('../string')

function editableField (state) {
  var field = stringField(h, {
    value: state.message,
    oninput: oninput
  })

  function oninput (e) {
    tree.update({ message: e.target.value })
  }

  return field
}

function staticField (state) {
  var field = stringField(h, {
    value: state.message,
    editable: false
  })

  return field
}

function render (state) {
  return h('div.fields', [
    h('div.editable', [editableField(state)]),
    h('div.static', [staticField(state)])
  ])
}

var tree = vraf({ message: 'hi' }, render, require('virtual-dom'))
document.body.querySelector('#string').appendChild(tree.render())

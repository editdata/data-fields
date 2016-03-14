var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var numberField = require('../number')

function editableField (state) {
  var field = numberField(h, {
    value: state.value,
    oninput: oninput
  })

  function oninput (e) {
    tree.update({ value: e.target.value })
  }

  return field
}

function staticField (state) {
  var field = numberField(h, {
    value: state.value,
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

var tree = vraf({ value: 1000 }, render, require('virtual-dom'))
document.body.querySelector('#number').appendChild(tree.render())

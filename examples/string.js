var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var stringField = require('../index')

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
    editableField(state),
    staticField(state)
  ])
}

var tree = vraf({ message: 'hi' }, render, require('virtual-dom'))
document.body.appendChild(tree.render())

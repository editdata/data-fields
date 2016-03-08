var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var createField = require('../index')

function editableField (state) {
  var field = createField(h, {
    value: state.url,
    oninput: oninput
  })

  function oninput (e) {
    tree.update({ url: e.target.value })
  }

  return field
}

function staticField (state) {
  var field = createField({ editable: false })
  return field
}

function render (state) {
  return h('div.fields', [
    editableField(state),
    staticField(state)
  ])
}

var tree = vraf({ url: 'example.com' }, render, require('virtual-dom'))
document.body.appendChild(tree.render())

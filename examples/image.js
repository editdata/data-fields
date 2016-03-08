var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var createField = require('../index')

function editableField (state) {
  var field = createField(h, { value: state.imageURL, oninput: oninput })

  function oninput (e) {
    tree.update({ imageURL: e.target.value })
  }

  return field
}

function staticField (state) {
  var field = createField(h, { value: state.imageURL, editable: false })
  return field.render(h, { value: state.imageURL })
}

function render (state) {
  return h('div.fields', [
    editableField(state),
    staticField(state)
  ])
}

var tree = vraf({ imageURL: 'http://placehold.it/50x50' }, render, require('virtual-dom'))
document.body.appendChild(tree.render())

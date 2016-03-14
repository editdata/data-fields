var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var createField = require('../image')

function editableField (state) {
  var field = createField(h, { value: state.imageURL, oninput: oninput })

  function oninput (e) {
    tree.update({ imageURL: e.target.value })
  }

  return field
}

function staticField (state) {
  return createField(h, { value: state.imageURL, editable: false })
}

function render (state) {
  return h('div.fields', [
    h('div.editable', [editableField(state)]),
    h('div.static', [staticField(state)])
  ])
}

var tree = vraf({ imageURL: 'http://placehold.it/50x50' }, render, require('virtual-dom'))
document.body.querySelector('#image').appendChild(tree.render())

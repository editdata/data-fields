var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var createField = require('../url')

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
  return createField(h, { editable: false }, state.url)
}

function render (state) {
  return h('div.fields', [
    h('div.editable', [editableField(state)]),
    h('div.static', [staticField(state)])
  ])
}

var tree = vraf({ url: 'example.com' }, render, require('virtual-dom'))
document.body.querySelector('#url').appendChild(tree.render())

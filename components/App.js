const App = {
  render: function (parentDom, params) {
    if (this.isDomElement(parentDom)) {
      let node = this.createElement('div', { ...(params || {}), 'class': 'testClass', 'id': 'testId' }, params && params.value || 'hello world')
      parentDom.appendChild(node)
    }
  },

  createElement: function (type, attrs, text) {
    let node = document.createElement(type)
    // TODO check valid attr for eg src for img ?
    // TODO could take classes list or array and join with spaces
    for (let key in attrs) {
      node.setAttribute(key, attrs[key])
    }

    if (text && typeof text === "string") {
      let textNode = document.createTextNode(text)
      node.appendChild(textNode)
    }

    return node
  },

  isDomElement: function (el) {
    return typeof HTMLElement === "object" ? el instanceof HTMLElement : //DOM2
    el && typeof el === "object" && el !== null && el.nodeType === 1 && typeof el.nodeName==="string"
  }
}

export default App

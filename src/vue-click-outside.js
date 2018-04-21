
function validate (binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }
  return true
}
function isServer (vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}
function stopPopup (e) {
  e.stopPropagation()
}

let callback // 缓存传入的函数

function handler () {
  callback()
}

export const clickOutside = {
  bind (el, binding, vNode) {
    if (!validate(binding) && !isServer(vNode)) return
    callback = binding.value
    el.addEventListener('click', stopPopup)
    document.addEventListener('click', handler)
  },
  update (el, binding, vNode) {
    callback = binding.value
  },
  unbind (el, binding, vNode) {
    if (!validate(binding) && !isServer(vNode)) return

    el.removeEventListener('click', stopPopup)
    document.removeEventListener('click', handler)
  }
}

const ClickOutside = {}

ClickOutside.install = Vue => {
  Vue.directive('click-outside', clickOutside)
}
export default ClickOutside

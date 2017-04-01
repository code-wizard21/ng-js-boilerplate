import template from './index.html'
import controller from './controller'
import './style'

let headerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default headerComponent

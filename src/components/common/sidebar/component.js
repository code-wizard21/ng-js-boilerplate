import template from './index.html'
import controller from './controller'
import './style'

let sidebarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default sidebarComponent

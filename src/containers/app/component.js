import template from './index.html'
import controller from './controller'
import './style'

let appComponent = {
  restrict: 'EA',
  replace: true,
  scope: true,
  template,
  controllerAs: 'self',
  controller
}

export default appComponent

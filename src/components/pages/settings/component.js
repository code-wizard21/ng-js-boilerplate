import template from './index.html'
import controller from './controller'
import './style'

let settingsComponent = {
  restrict: 'EA',
  replace: true,
  scope: true,
  template,
  controllerAs: 'self',
  controller
}

export default settingsComponent

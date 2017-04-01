import angular from 'angular'
import uiRouter from 'angular-ui-router'
import homeComponent from './component'

const homeModule = angular.module('home', [
  uiRouter
])

.component('home', homeComponent)

export default homeModule

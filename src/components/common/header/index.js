import angular from 'angular'
import headerComponent from './component'

const headerModule = angular.module('header', [
  'ngMaterial'
])

.component('header', headerComponent)

export default headerModule

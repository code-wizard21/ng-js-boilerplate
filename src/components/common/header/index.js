import angular from 'angular'
import headerComponent from './component'

const headerModule = angular.module('header', [])
  .component('header', headerComponent)

export default headerModule

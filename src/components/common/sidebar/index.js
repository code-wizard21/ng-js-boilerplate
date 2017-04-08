import angular from 'angular'
import sidebarComponent from './component'

const sidebarModule = angular.module('sidebar', [])
.component('sidebar', sidebarComponent)

export default sidebarModule

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import dashboardComponent from './component'

const dashboardModule = angular.module('dashboard', [uiRouter])
.component('dashboard', dashboardComponent)

export default dashboardModule

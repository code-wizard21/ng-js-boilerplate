import angular from 'angular'
import uiRouter from 'angular-ui-router'
import settingsComponent from './component'

const settingsModule = angular.module('settings', [uiRouter])
.component('settings', settingsComponent)

export default settingsModule

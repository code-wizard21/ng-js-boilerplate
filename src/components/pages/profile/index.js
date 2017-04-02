import angular from 'angular'
import uiRouter from 'angular-ui-router'
import profileComponent from './component'

const profileModule = angular.module('profile', [uiRouter])
.component('profile', profileComponent)

export default profileModule

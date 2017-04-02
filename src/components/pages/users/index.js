import angular from 'angular'
import uiRouter from 'angular-ui-router'
import usersComponent from './component'

const usersModule = angular.module('users', [uiRouter])
.component('users', usersComponent)

export default usersModule

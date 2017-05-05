import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngRedux from 'ng-redux'

import 'angular-koka-fullscreen'
import 'angular-translate'
import 'angular-animate'
import 'angular-aria'
import 'angular-material'
import 'angular-messages'
import 'angular-material-icons'

import HeaderComponent from './components/common/header/'
import SdebarComponent from './components/common/sidebar'
import UsersComponent from './components/pages/users'
import SettingsComponent from './components/pages/settings'
import DashboardComponent from './components/pages/dashboard'
import ProfileComponent from './components/pages/profile'

angular
  .module('app', [
    uiRouter,
    ngRedux,

    'pascalprecht.translate',
    'angular-koka-fullscreen',
    'ngMessages',
    'ngMaterial',
    'ngMdIcons',

    SdebarComponent.name,
    HeaderComponent.name,
    UsersComponent.name,
    SettingsComponent.name,
    ProfileComponent.name,
    DashboardComponent.name
  ])

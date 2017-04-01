import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngRedux from 'ng-redux'
import 'angular-animate'
import 'angular-aria'
import 'angular-material'
import 'angular-material-icons'

import AppComponent from './component'

import HeaderComponent from '../../components/common/header/'
import SdebarComponent from '../../components/common/sidebar'
import HomeComponent from '../../components/pages/home'

// import our default styles for the whole application
angular
    .module('app', [
      uiRouter,
      ngRedux,
      'ngMaterial',
      'ngMdIcons',
      SdebarComponent.name,
      HeaderComponent.name,
      HomeComponent.name
    ])
    .component('app', AppComponent)

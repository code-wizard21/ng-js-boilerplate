import angular from 'angular'
import { RootReducer } from './reducers'

angular
  .module('app')
  .config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider) => {
    'ngInject'

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        template: '<app></app>'
      })

      // Dashboard page to contain our goats list page
      .state('app.home', {
        url: '/',
        template: '<home></home>'
      })

    $urlRouterProvider.otherwise('/')

    $ngReduxProvider.createStoreWith(RootReducer)
  })

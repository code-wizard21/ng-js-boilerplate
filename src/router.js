import angular from 'angular'

angular
  .module('app')
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject'

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/users')

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        template: '<app></app>'
      })
      .state('app.users', {
        url: '/users',
        data: {name: 'Users'},
        template: '<users></users>'
      })
      .state('app.settings', {
        url: '/settings',
        template: '<settings></settings>'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      })
      .state('app.profile', {
        url: '/profile',
        template: '<profile></profile>'
      })
  })

import angular from 'angular'
import enUS from './en-us'
import enCA from './en-ca'

angular
  .module('app')
  .config(($translateProvider) => {
    'ngInject'
    $translateProvider
      .translations('en-us', enUS)
      .translations('en-ca', enCA)
      .preferredLanguage('en-us')
  })

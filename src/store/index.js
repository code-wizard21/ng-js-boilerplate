import angular from 'angular'
import {RootReducer} from './store'
import {createLogger} from 'redux-logger'

const logger = createLogger({
  level: 'info',
  collapsed: false
})

angular
  .module('app')
  .config(($ngReduxProvider) => {
    'ngInject'
    $ngReduxProvider
      .createStoreWith(RootReducer, [logger])
  })

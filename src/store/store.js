import { combineReducers } from 'redux'
import { appReducer } from './reducers/app/'

export const RootReducer = combineReducers({
  app: appReducer
})

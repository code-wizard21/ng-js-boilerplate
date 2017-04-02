import TYPE from './types'
import { APP_INITIAL_STATE } from './initialState'

export default function appReducer (state = APP_INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.TOGGLE_FULL_SCREEN.TYPE: return {...state, isFullScreen: action.status}
    case TYPE.CHANGE_HEADER_TITLE_PAGE.TYPE: return {...state, headerTitlePage: action.status}
    default: return state
  }
}

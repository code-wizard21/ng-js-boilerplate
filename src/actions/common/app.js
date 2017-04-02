import TYPES from '../../store/reducers/app/types'

export function actionToggleFullScreen (status = false) {
  return {
    type: TYPES.TOGGLE_FULL_SCREEN.TYPE,
    status
  }
}

export function actionChangeHeaderTitlePage (status = false) {
  return {
    type: TYPES.CHANGE_HEADER_TITLE_PAGE.TYPE,
    status
  }
}

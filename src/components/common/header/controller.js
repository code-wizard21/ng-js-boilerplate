import {actionToggleFullScreen} from '../../../actions/'

class HeaderController {
  constructor ($scope, $ngRedux, $mdSidenav, $translate) {
    this.$mdSidenav = $mdSidenav
    this.$translate = $translate

    this.lenguage = [
      {
        label: 'English (United States)',
        name: 'en-us'
      },
      {
        label: 'English (Canada)',
        name: 'en-ca'
      }
    ]

    const disconnect = $ngRedux.connect(this.mapStateToThis, {actionToggleFullScreen})(this)
    $scope.$on('$destroy', disconnect)
  }
  changeLanguage (langKey) { this.$translate.use(langKey); console.log(this.$translate.use()) }
  toggleSidebar (menuId) { this.$mdSidenav(menuId).toggle() }
  toggleFullScreen () { this.actionToggleFullScreen(!this.isFullScreen) }
  openMenu ($mdMenu, ev) { $mdMenu.open(ev) }

  mapStateToThis (state) {
    return {
      isFullScreen: state.app.isFullScreen,
      headerTitlePage: state.app.headerTitlePage
    }
  }
}

HeaderController.$inject = ['$scope', '$ngRedux', '$mdSidenav', '$translate']
export default HeaderController

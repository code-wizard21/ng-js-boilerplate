/* @ngInject */
class AppController {
  constructor ($scope, $ngRedux) {
    const disconnect = $ngRedux.connect(this.mapStateToThis)(this)
    $scope.$on('$destroy', disconnect)
  }

  mapStateToThis (state) { return { isFullScreen: state.app.isFullScreen } }
}
export default AppController

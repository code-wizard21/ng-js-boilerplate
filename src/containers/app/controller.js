class AppController {
  constructor ($scope, $ngRedux) {
    const disconnect = $ngRedux.connect(this.mapStateToThis)(this)
    $scope.$on('$destroy', disconnect)
  }

  mapStateToThis (state) {
    return {
      isFullScreen: state.app.isFullScreen
    }
  }
}

AppController.$inject = ['$scope', '$ngRedux']

export default AppController

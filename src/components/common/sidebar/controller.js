class SidebarController {
  constructor ($scope, $ngRedux) {
    let unsubscribe = $ngRedux.connect(this.mapStateToThis)(this)
    $scope.$on('$destroy', unsubscribe)
    $scope.menu = [
      {
        link: 'app.dashboard',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link: 'app.users',
        title: 'Users',
        icon: 'group'
      }
    ]
    $scope.admin = [
      {
        link: 'app.settings',
        title: 'Settings',
        icon: 'settings'
      },
      {
        link: 'app.profile',
        title: 'Profile',
        icon: 'person'
      }
    ]
    $scope.activity = [
      {
        what: 'Brunch this weekend?',
        who: 'Ali Conners',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'Summer BBQ',
        who: 'to Alex, Scott, Jennifer',
        when: '3:08PM',
        notes: "Wish I could come out but I'm out of town this weekend"
      },
      {
        what: 'Oui Oui',
        who: 'Sandra Adams',
        when: '3:08PM',
        notes: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        what: 'Birthday Gift',
        who: 'Trevor Hansen',
        when: '3:08PM',
        notes: 'Have any ideas of what we should get Heidi for her birthday?'
      },
      {
        what: 'Recipe to try',
        who: 'Brian Holt',
        when: '3:08PM',
        notes: 'We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos'
      }
    ]
  }

  mapStateToThis (state) {
    return {
      sidebar: state.sidebar
    }
  }
}

SidebarController.$inject = ['$scope', '$ngRedux']

export default SidebarController

class SidebarController {
  constructor ($scope) {
    $scope.menu = [
      {
        link: '',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link: '',
        title: 'Friends',
        icon: 'group'
      },
      {
        link: '',
        title: 'Messages',
        icon: 'message'
      }
    ]
    $scope.admin = [
      {
        link: '',
        title: 'Trash',
        icon: 'delete'
      },
      {
        link: 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'settings'
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
}

SidebarController.$inject = ['$scope']

export default SidebarController

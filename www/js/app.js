// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'dionics.dataService', 'dionics.neiDintorniController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.eventi', {
      url: '/eventi',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'views/eventi/tabMenu/tabMenu.html'
        }
      }
  })

  .state('app.eventi.neidintorni', {
      url: '/neidintorni',
      views: {
        'neidintorni': {
          templateUrl: 'views/eventi/neiDintorni/neiDintorni.html',
          controller: 'NeiDintorniCtrl'
        }
      }
  })

  .state('app.eventi.creaevento', {
      url: '/creaevento',
      views: {
        'creaevento': {
          templateUrl: 'views/eventi/creaEvento/creaEvento.html'
        }
      }
  })

  .state('app.evento', {
      url: '/singoloevento/:evento',
      views: {
        '@': {
          templateUrl: 'views/eventi/neiDintorni/neiDintorni.html',
          controller: 'NeiDintorniCtrl'
        }
      }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/eventi/neidintorni');
});

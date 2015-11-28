'use strict';

angular.module('dionics.personaController', ['ionic'])

.controller('PersonaCtrl', function ($scope, $ionicPopup, dataService, $stateParams, $ionicSlideBoxDelegate, $ionicTabsDelegate) {

	$scope.slideHasChanged = function($index) {
        
        $ionicTabsDelegate.select($index);
    }

    $scope.onTabSelected = function() {
        
        var x = $ionicTabsDelegate.selectedIndex();
        $ionicSlideBoxDelegate.slide(x)
    }

	$scope.persona = dataService.getPersona($stateParams.persona);

})
'use strict';

angular.module('dionics.eventoController', ['ionic'])

.controller('EventoCtrl', function ($scope, $ionicPopup, dataService, $stateParams, $ionicSlideBoxDelegate, $ionicTabsDelegate) {

	$scope.slideHasChanged = function($index) {
        
        $ionicTabsDelegate.select($index);
    }

    $scope.onTabSelected = function() {
        
        var x = $ionicTabsDelegate.selectedIndex();
        $ionicSlideBoxDelegate.slide(x)
    }

	$scope.evento = dataService.getEvento($stateParams.evento);

	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

})
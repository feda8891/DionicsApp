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

	$scope.map = { center: { latitude: $scope.evento.luogo.latitudine, longitude: $scope.evento.luogo.longitudine }, zoom: 15 };

	$scope.marker = {
        id: 0,
        coords: {
          latitude: $scope.evento.luogo.latitudine,
          longitude: $scope.evento.luogo.longitudine
        }
      }; 
       
	$scope.marker.options = {
	    draggable: false,
	    labelContent: "lat: " + $scope.marker.coords.latitude + '<br/> ' + 'lon: ' + $scope.marker.coords.longitude,
	    labelAnchor: "80 120",
	    labelClass: "marker-labels"
	};  

})
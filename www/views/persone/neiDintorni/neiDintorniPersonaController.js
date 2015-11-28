'use strict';

angular.module('dionics.neiDintorniPersonaController', ['ionic'])

.controller('NeiDintorniPersonaCtrl', function ($scope, $ionicPopup, dataService) {

	$scope.persone = dataService.getPersone();

	$scope.map = { 
		center: { 
			latitude: 41.912458, longitude: 12.473889 
		}, 
		zoom: 18, 
		pan: 1 
	};

	$scope.markers = {};
	angular.forEach ($scope.persone, function (persona){
		$scope.markers[persona.id] = {
			id: persona.id,
			coords: {
        		latitude: persona.posizioneGeo.latitude,
        		longitude: persona.posizioneGeo.longitude
        	},
        	options: {
        		labelContent: persona.nome + ' ' + persona.cognome
        	},
        	icon: persona.icon,
		};

	});

})
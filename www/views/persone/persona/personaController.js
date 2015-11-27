'use strict';

angular.module('dionics.personaController', ['ionic'])

.controller('PersonaCtrl', function ($scope, $ionicPopup, dataService, $stateParams) {

	$scope.persona = dataService.getPersona($stateParams.persona);

})
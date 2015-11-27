'use strict';

angular.module('dionics.neiDintorniPersonaController', ['ionic'])

.controller('NeiDintorniPersonaCtrl', function ($scope, $ionicPopup, dataService) {

	$scope.persone = dataService.getPersone();

})
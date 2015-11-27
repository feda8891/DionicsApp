'use strict';

angular.module('dionics.eventoController', ['ionic'])

.controller('EventoCtrl', function ($scope, $ionicPopup, dataService, $stateParams) {

	$scope.evento = dataService.getEvento($stateParams.evento);

})
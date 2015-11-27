'use strict';

angular.module('dionics.neiDintorniController', ['ionic'])

.controller('NeiDintorniCtrl', function ($scope, $ionicPopup, dataService) {

	$scope.nome = dataService.getEvento(1).nome;

})
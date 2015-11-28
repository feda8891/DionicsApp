'use strict';

angular.module('dionics.neiDintorniLuogoController', ['ionic'])

.controller('NeiDintorniLuogoCtrl', function ($scope, $ionicPopup, dataService) {

	$scope.luoghi = dataService.getLuoghi();

})
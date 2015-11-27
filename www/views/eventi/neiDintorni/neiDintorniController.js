'use strict';

angular.module('dionics.neiDintorniController', ['ionic'])

.controller('NeiDintorniCtrl', function ($scope, $ionicPopup, dataService) {

	$scope.eventi = dataService.getEventi();

})
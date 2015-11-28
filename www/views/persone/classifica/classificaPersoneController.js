'use strict';

angular.module('dionics.classificaPersoneController', ['ionic'])

.controller('classificaPersoneCtrl', function ($scope, $ionicPopup, dataService) {

	$scope.persone = dataService.getPersone();

})
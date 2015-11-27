'use strict';

angular.module('dionics.dataService',[])
.factory('dataService', function() {
	var persone = {};
	var eventi = {
		1: {
			nome: 'Francesco'
		}
	};

	var data = {
		getEventi: function(){
			return eventi;
		},
		getEvento: function(key){
			return eventi[key];
		}
	};

	return data;

});
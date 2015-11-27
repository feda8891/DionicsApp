'use strict';

angular.module('dionics.dataService',[])
.factory('dataService', function() {
	var persone = {};
	var eventi = {
		1: {
			id: '1',
			nome: 'Aperitivo Deloitte Digital',
			img: '',
			luogo: {
				via: 'Via Romagnosi 18/a',
				citta: 'Roma'
			},
			quando: {
				inizio: '28/11/2015 21:00',
				fine: '28/11/2015 23:00'
			},
			partecipanti:{
				1: {
					id: '1',
					nome: 'Francesco',
					cognome: 'Boccassi',
					img: ''
				},
				2: {
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: ''
				}
			}
		},
		2: {
			id: '2',
			nome: 'Cena fra amici',
			img: '',
			luogo: {
				via: 'Via Romagnosi 18/a',
				citta: 'Roma'
			},
			quando: {
				inizio: '28/11/2015 20:00',
				fine: '28/11/2015 23:00'
			},
			partecipanti:{
				id: '1',
				nome: 'Giovanni',
				cognome: 'Ranallo',
				img: ''
			}
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
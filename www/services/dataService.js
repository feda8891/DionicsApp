'use strict';

angular.module('dionics.dataService',[])
.factory('dataService', function() {
	var persone = {
		1: {
			id:'1',
			nome:'Giovanni',
			cognome:'Ranallo',
			classifica:{
				posizione : '1', punteggio : '820'},
			genere:'Maschio',
			eta:'',
			idfacebook:'',
			interessi:[
				{nome:'Golf', 
				img: ''}
			],
			posizioneGeo:{
				latitude: 41.912458,
				longitude: 12.473889
			},
			icon:'../img/persona/francesco.jpg',
			eventi:[{
				id: '2',
				nome: 'Cena fra amici',
				img: '',
				luogo: {
					via: 'Via Romagnosi 18/a',
					citta: 'Roma'}
				}]
		},
		2: {
			id:'2',
			nome:'Francesco',
			cognome:'Boccassi',
			classifica:{
				posizione : '2', punteggio : '630'},
			genere:'Maschio',
			eta:'',
			idfacebook:'',
			interessi:[
				{nome:'Sport', 
				img: ''}
			],
			posizioneGeo:{
				latitude: 41.9111507,
				longitude: 12.474195
			},
			icon:'../img/persona/francesco.jpg',
			eventi:[{
				id: '2',
				nome: 'Aperitivo Deloitte Digital',
				img: '',
				luogo: {
					via: 'Via Romagnosi 18/a',
					citta: 'Roma'}
			}]
		}
	};
	
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
			partecipanti:[
				{
					id: '1',
					nome: 'Francesco',
					cognome: 'Boccassi',
					img: ''
				},
				{
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: ''
				}
			]
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
			partecipanti:[
				{
					id: '1',
					nome: 'Giovanni',
					cognome: 'Ranallo',
					img: ''
				},
				{
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: ''
				}
			]				
		}
	};

	var data = {
		getEventi: function(){
			return eventi;
		},
		getEvento: function(key){
			return eventi[key];
		},
		getPersone: function(){
			return persone;
		},
		getPersona: function(key){
			return persone[key];
		}
	};

	return data;

});
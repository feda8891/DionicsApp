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
			genere:'Uomo',
			eta:'',
			idfacebook:'',
			interesse:{
					nome:'Golf', 
					img: ''
			},
			posizioneGeo:{
				latitude: 41.912458,
				longitude: 12.473889
			},
			icon:'img/persona/giovanni.jpg',
			serviceLine: 'Digital Transformation',
			eventi:[{
				id: '2',
				nome: 'Cena fra amici',
				img: '',
				luogo: {
					via: 'Via Romagnosi 18/a',
					citta: 'Roma'},
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
				],
			}]
		},
		2: {
			id:'2',
			nome:'Francesco',
			cognome:'Boccassi',
			classifica:{
				posizione : '2', punteggio : '630'},
			genere:'Uomo',
			eta:'',
			idfacebook:'',
			interesse:{
					nome:'Jazz', 
					img: ''
			},
			posizioneGeo:{
				latitude: 41.9111507,
				longitude: 12.474195
			},
			icon:'img/persona/francesco.jpg',
			serviceLine: 'Digital Transformation',
			eventi:[{
				id: '2',
				nome: 'Aperitivo Deloitte Digital',
				img: '',
				luogo: {
					via: 'Via Romagnosi 18/a',
					citta: 'Roma'},
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
				],
			}]
		},
		3: {
			id:'3',
			nome:'Riccardo',
			cognome:'Gambella',
			classifica:{
				posizione : '3', punteggio : '440'},
			genere:'Uomo',
			eta:'',
			idfacebook:'',
			interesse:{
				nome:'Jazz', 
				img: ''
			},
			posizioneGeo:{
				latitude: 42.5658288,
				longitude: 12.6446638
			},
			icon:'img/persona/riccardo.jpg',
			serviceLine: 'Digital Transformation',
			eventi:[/*{
				id: '2',
				nome: 'Aperitivo Deloitte Digital',
				img: '',
				luogo: {
					via: 'Via Romagnosi 18/a',
					citta: 'Roma'}
			}*/]
		}
	};
	
	var eventi = {
		1: {
			id: '1',
			nome: 'Aperitivo Deloitte Digital',
			img: 'img/evento/beer400.jpg',
			luogo: {
				via: 'Via Romagnosi 18/a',
				citta: 'Roma',
				latitudine: 41.912167,
				longitudine: 12.473843
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
					img: 'img/persona/francesco.jpg',
					stato: 'Deloitte Digital'
				},
				{
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: 'img/persona/riccardo.jpg',
					stato: 'Deloitte Digital'
				}
			],
			descrizione: 'Non mancate!'
		},
		2: {
			id: '2',
			nome: 'Cena fra amici',
			img: 'img/evento/dinner400.jpg',
			luogo: {
				via: 'Via delle Cave 88',
				citta: 'Roma',
				latitudine: 41.8715924,
				longitudine: 12.5287508
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
					img: 'img/persona/giovanni.jpg',
					stato: 'Deloitte Digital'
				},
				{
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: 'img/persona/riccardo.jpg',
					stato: 'Deloitte Digital'
				}
			],
			descrizione: 'Vi aspetto!'				
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
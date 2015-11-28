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
				img: 'img/evento/dinner400.jpg',
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
				img: 'img/evento/beer400.jpg',
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
					img: 'img/persona/francesco.jpg'
				},
				{
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: ''
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
					img: ''
				},
				{
					id: '2',
					nome: 'Riccardo',
					cognome: 'Gambella',
					img: ''
				}
			],
			descrizione: 'Vi aspetto!'				
		}
	};

	var luoghi = {
		1: {
			id: '1',
			nome: 'Colosseo',
			img: 'img/luogo/colosseo.jpg',
			posizione: {
				via: 'Piazza del Colosseo, 1',
				citta: 'Roma',
				latitudine: 41.890202,
				longitudine: 12.492199
			},
			visitatori:[
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
			],
			descrizione: 'Bellissimo!'
		},
		2: {
			id: '2',
			nome: 'Drunken Ship',
			img: 'img/luogo/drunken.jpg',
			posizione: {
				via: 'Piazza Campo de Fiori, 20',
				citta: 'Roma',
				latitudine: 41.895803,
				longitudine: 12.471583
			},
			visitatori:[
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
			],
			descrizione: 'Epico!'				
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
		},
		getLuoghi: function(){
			return luoghi;
		},
		getLuogo: function(key){
			return luoghi[key];
		}
	};

	return data;

});
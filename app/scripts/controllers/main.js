'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;
    $scope.slides = [
    	{
    		title: 'Aprende a Mantenerte en forma',
    		image: baseURL + 'sports/',
    		text: 'Practica algún deporte todos los dias'
    	},
    	{
    		title: 'Buena Alimentación',
    		image: baseURL + 'food/',
    		text: 'La importancia de frutas y verdura en la alimentación'
    	},
    	{
    		title: 'En Contacto con la naturaleza',
    		image: baseURL + 'nature/',
    		text: 'Mantente en armonía con la naturaleza!'
    	},
    ];

    var baseURL = 'http://lorempixel.com/200/200/';
    $scope.contenido = [
    	{
    		img: baseURL + 'people',
    		title: 'Sobre Nosotros',
    		summary: 'Somos una empresa comprometida con la vida sana'
    	},
    	{
    		img: baseURL + 'business',
    		title: 'Nuestros Servicios',
    		summary: 'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación'
    	},
    	{
    		img: baseURL + 'transport',
    		title: 'Contáctanos',
    		summary: '#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
    	},
    ];
  });

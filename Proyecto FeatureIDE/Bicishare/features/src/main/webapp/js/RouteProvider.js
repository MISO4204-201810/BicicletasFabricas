'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('admininvalid', [
  'ngRoute',
  'angularUtils.directives.dirPagination',
  'admininvalid.controllers'
]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/Bonificacion', {templateUrl: 'partials/Bonificacion.html', controller: 'BonificacionCtrl'});
    $routeProvider.when('/Bicicleta', {templateUrl: 'partials/Bicicleta.html', controller: 'BicicletaCtrl'});
    $routeProvider.when('/Multa', {templateUrl: 'partials/Multa.html', controller: 'MultaCtrl'});
    /*if[Accesorios]*/
    $routeProvider.when('/Accesorio', {templateUrl: 'partials/Accesorio.html', controller: 'AccesorioCtrl'});
    /*end[Accesorios]*/
    $routeProvider.when('/Proveedor', {templateUrl: 'partials/Proveedor.html', controller: 'ProveedorCtrl'});
    /*if[Bonificaciones]*/
    $routeProvider.when('/BonificacionGanada', {templateUrl: 'partials/BonificacionGanada.html', controller: 'BonificacionGanadaCtrl'});
    /*end[Bonificaciones]*/
    /*if[Pago]*/
    $routeProvider.when('/Pago', {templateUrl: 'partials/Pago.html', controller: 'PagoCtrl'});
    /*end[Pago]*/
    /*if[Gamification]*/
    $routeProvider.when('/Logro', {templateUrl: 'partials/Logro.html', controller: 'LogroCtrl'});
    /*end[Gamification]*/
    $routeProvider.when('/Usuario', {templateUrl: 'partials/Usuario.html', controller: 'UsuarioCtrl'});
    $routeProvider.when('/Marca', {templateUrl: 'partials/Marca.html', controller: 'MarcaCtrl'});
    $routeProvider.when('/Prestamo', {templateUrl: 'partials/Prestamo.html', controller: 'PrestamoCtrl'});

    $routeProvider.otherwise({redirectTo: '/'});
  }]);

var module = angular.module("admininvalid.controllers", []);

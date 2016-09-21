'use strict';

/**
 * @ngdoc overview
 * @name apodApp
 * @description
 * # apodApp
 *
 * Main module of the application.
 */
angular
  .module('apodApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.view.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.view.html',
        controller: 'AboutController',
        controllerAs: 'ctrl'
      })
      .when('/error', {
        templateUrl: 'views/404.view.html'
      })
      .otherwise({
        redirectTo: '/error'
      });

    $locationProvider.html5Mode(true);
  });

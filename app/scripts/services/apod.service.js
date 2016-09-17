'use strict';

/**
 * @ngdoc function
 * @name apodApp.service:apodService
 * @description
 * # service to provide astronomy picture of the day api data
 * Service of the apodApp
 */
angular.module('apodApp')
  .service('apodService', ['$http', function($http) {

    /**
     * Please, use your own API Key for testing or developing porpouses.
     * Get your API KEY at https://api.nasa.gov/index.html#apply-for-an-api-key
     */
    var NASA_APOD_API = 'https://api.nasa.gov/planetary/apod';
    var API_KEY       = '&api_key=mqjg335mkoLccXimWEKSSnrP4rhX9XNoPQmyqXn4';

    this.getApod = function () {
      return $http.get(NASA_APOD_API + '?concept_tags=True' + API_KEY);
    };
}]);

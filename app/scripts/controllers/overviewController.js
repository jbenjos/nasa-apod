'use strict';

/**
 * @ngdoc function
 * @name apodApp.controller:overviewController
 * @description
 * # overviewController
 * Controller of the overview tab
 */
angular.module('apodApp')
  .controller('overviewController', ['$scope', 'apodService', function ($scope, apodService) {

    $scope.pictureInfo = function () {
      apodService.getApod()
        .success(function (data) {
          $scope.apodInfo = data;
        }).error(function () {
          console.log('An error occurred when we tried to make the apod API request :(');
        });
    };

    $scope.pictureInfo();
  }]);

'use strict';

/**
 * @ngdoc function
 * @name apodApp.controller:overviewController
 * @description
 * # overviewController
 * Controller of the overview tab
 */
angular.module('apodApp')
  .controller('HomeController', function ($scope, apodService) {

    //CONSTANTS
    $scope.title = "Home Page";

    // ACTIONS
    $scope.pictureInfo = pictureInfo;

    init();

    function init(){
      pictureInfo();
    };

    function pictureInfo () {
      apodService.getApod()
        .success(function (data) {
          $scope.apodInfo = data;
          console.log($scope.apodInfo);
        }).error(function () {
          $scope.error = "Sorry, something happens when tried to get the picture";
        });
    };

  });

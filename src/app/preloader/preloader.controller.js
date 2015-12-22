'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class preloader
 * @interface preloader.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:07:55 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('preloader', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      $$('.demo-indicator').on('click', function () {
          window.application.showIndicator();
          setTimeout(function () {
              window.application.hideIndicator();
          }, 2000);
      });
      $$('.demo-preloader').on('click', function () {
          window.application.showPreloader();
          setTimeout(function () {
              window.application.hidePreloader();
          }, 2000);
      });
      $$('.demo-preloader-custom').on('click', function () {
          window.application.showPreloader('My text...');
          setTimeout(function () {
              window.application.hidePreloader();
          }, 2000);
      });
    }
]);

'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class swipe
 * @interface swipe.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:01 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('swipe', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      $$('.demo-remove-callback').on('deleted', function () {
          window.application.alert('Thanks, item removed!');
      });
      $$('.demo-reply').on('click', function () {
          window.application.alert('Reply');
      });
      $$('.demo-mark').on('click', function () {
          window.application.alert('Mark');
      });
      $$('.demo-forward').on('click', function () {
          window.application.alert('Forward');
      });
    }
]);

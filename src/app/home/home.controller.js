'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class home
 * @interface home.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 14:30:06 GMT+0530 (IST)
 */
/*global angular*/
angular.module('f7.app')

.controller('home', ['$scope', '$rootScope', '$stateParams', '$log', '$q', 'framework7',

    function($scope, $rootScope, $stateParams, $log, $q, Framework7) {
    	$scope.coolVariable = 'home';
    	$scope.coolMethod = function(){
    		console.log('This is a sample method');
    	};
      // var mainView = Framework7.getInstance().addView('.view-main', {});
      var viewInstance = Framework7.registerView("mainView",".main-view",{});
  }
]);

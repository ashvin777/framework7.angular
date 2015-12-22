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

.controller('home', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = 'home';
    	$scope.coolMethod = function(){
    		console.log('This is a sample method');
    	};
      
      $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        //console.log('state changed');
        //window.app = new Framework7();
      });

    }
]);

'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class cards
 * @interface cards.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:04:19 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('cards', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "cards";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class grid
 * @interface grid.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:05:19 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('grid', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "grid";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class search
 * @interface search.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:08:32 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('search', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "search";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
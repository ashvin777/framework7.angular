'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sortList
 * @interface sort-list.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:08:50 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('sortList', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "sort-list";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
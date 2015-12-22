'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class virtualList
 * @interface virtual-list.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:21 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('virtualList', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "virtual-list";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
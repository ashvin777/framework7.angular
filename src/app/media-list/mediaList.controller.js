'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class mediaList
 * @interface media-list.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:06:28 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('mediaList', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "media-list";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
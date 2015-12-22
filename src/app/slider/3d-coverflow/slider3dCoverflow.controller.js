'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class slider3dCoverflow
 * @interface 3d-coverflow.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:30:11 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('slider3dCoverflow', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "3d-coverflow";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
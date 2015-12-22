'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class staticButton
 * @interface static-button.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:27:49 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('staticButton', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "static-button";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
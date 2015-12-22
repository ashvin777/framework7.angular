'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class contacts
 * @interface contacts.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:04:25 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('contacts', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
    	$scope.coolVariable = "contacts";
    	$scope.coolMethod = function(){
    		console.log("This is a sample method");
    	};
    }
]);
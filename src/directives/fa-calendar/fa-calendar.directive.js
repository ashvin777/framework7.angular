'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule directives
 * @class faCalendar
 * @element fa-calendar
 * @interface fa-calendar.template.html
 * @author Ashvin-iMac
 * @date Thu Dec 24 2015 14:09:59 GMT+0530 (IST)
 */

angular.module('f7.directives')

.directive('faCalendar', [ 'extends',

    function(Extends) {
        return {
            restrict: 'EAC',
            templateUrl: 'src/directives/fa-calendar/fa-calendar.template.html',
            link: function(scope, element, attrs, controller) {

            }
        };
    }
]);

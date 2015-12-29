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

.directive('faCalendar', ['extends', 'framework7',

  function(Extends, Framework7) {
    return {
      restrict: 'EAC',
      scope: {
        "model" : "=faCalendar"
      },
      // templateUrl: 'src/directives/fa-calendar/fa-calendar.template.html',
      link: function(scope, element, attrs, controller) {
        var config = {};
        var isInput = element.prop('tagName').toLowerCase(0) === 'input';
        //extending all issolated scope into config variable
        Extends.isolatedScope(scope, config);
        //based on the type of element(input or other), changing the way to implement the autocomplete
        if (isInput) {
          config.input = element;
        } else {
          config.container = element;
        }
        // console.log(config, Framework7);
        scope.model = Framework7.getInstance().calendar(config);
      }
    };
  }
]);

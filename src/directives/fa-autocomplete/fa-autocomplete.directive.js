'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule directives
 * @class faAutocomplete
 * @element fa-autocomplete
 * @interface fa-autocomplete.template.html
 * @author Ashvin-iMac
 * @date Wed Dec 23 2015 15:28:43 GMT+0530 (IST)
 */

angular.module('f7.directives')

.directive('faAutocomplete', [

    function() {
        return {
            restrict: 'EAC',
            scope : {
              'faData' : '=',
              'faPlaceholder' : '@',
              'faDropdownOpen' : '@',
              'faOpenIn' : '@'
            },
            templateUrl: 'src/directives/fa-autocomplete/fa-autocomplete.template.html',
            link: function(scope, element, attrs, controller) {
              window.application.autocomplete({
                  input: element,
                  openIn: 'dropdown' || scope.faOpenIn,
                  dropdownPlaceholderText: scope.faPlaceholder,
                  source: function (autocomplete, query, render) {
                      var results = [];
                      if (query.length === 0 && scope.faDropdownOpen) {
                          render(results);
                          return;
                      }
                      // Find matched items
                      for (var i = 0; i < scope.faData.length; i++) {
                          if (scope.faData[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(scope.faData[i]);
                      }
                      // Render items by passing array with result items
                      render(results);
                  }
              });
            }
        };
    }
]);

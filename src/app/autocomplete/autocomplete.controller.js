'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class autocomplete
 * @interface autocomplete.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:03:56 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('autocomplete', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {

      $scope.fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
      $scope.ajaxSource = function (autocomplete, query, render) {
          var results = [];
          if (query.length === 0) {
              render(results);
              return;
          }
          // Show Preloader
          autocomplete.showPreloader();
          // Do Ajax request to Autocomplete data
          $$.ajax({
              url: 'autocomplete-languages.json',
              method: 'GET',
              dataType: 'json',
              //send "query" to server. Useful in case you generate response dynamically
              data: {
                  query: query
              },
              success: function (data) {
                  // Find matched items
                  for (var i = 0; i < data.length; i++) {
                      if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                  }
                  // Hide Preoloader
                  autocomplete.hidePreloader();
                  // Render items by passing array with result items
                  render(results);
              }
          });
      };
    }
]);

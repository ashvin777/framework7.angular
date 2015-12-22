'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class infiniteScroll
 * @interface infinite-scroll.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:05:27 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('infiniteScroll', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      // Loading trigger
      var loading = false;
      // Last loaded index, we need to pass it to script
      var lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
      // Attach 'infinite' event handler
      $$('.infinite-scroll').on('infinite', function () {
          // Exit, if loading in progress
          if (loading) return;
          // Set loading trigger
          loading = true;
          // Request some file with data
          $$.get('infinite-scroll-load.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
              loading = false;
              if (data === '') {
                  // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                  window.application.detachInfiniteScroll($$('.infinite-scroll'));
              }
              else {
                  // Append loaded elements to list block
                  $$('.infinite-scroll .list-block ul').append(data);
                  // Update last loaded index
                  lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
              }
          });
      });
    }
]);

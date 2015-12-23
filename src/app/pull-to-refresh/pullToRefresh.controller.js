'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class pullToRefresh
 * @interface pull-to-refresh.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:08:14 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('pullToRefresh', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      // Dummy Content
      var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
      var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
      // Pull to refresh content
      var ptrContent = $$('.pages').find('.pull-to-refresh-content');
      // Add 'refresh' listener on it
      ptrContent.on('refresh', function (e) {
          // Emulate 2s loading
          setTimeout(function () {
              var picURL = 'http://lorempixel.com/88/88/abstract/' + Math.round(Math.random() * 10);
              var song = songs[Math.floor(Math.random() * songs.length)];
              var author = authors[Math.floor(Math.random() * authors.length)];
              var linkHTML = '<li class=\'item-content\'>' +
                                  '<div class=\'item-media\'><img src=\'' + picURL + '\' width=\'44\'/></div>' +
                                  '<div class=\'item-inner\'>' +
                                      '<div class=\'item-title-row\'>' +
                                          '<div class=\'item-title\'>' + song + '</div>' +
                                      '</div>' +
                                      '<div class=\'item-subtitle\'>' + author + '</div>' +
                                  '</div>' +
                              '</li>';
              ptrContent.find('ul').prepend(linkHTML);
              // When loading done, we need to 'close' it
              window.application.pullToRefreshDone();
          }, 2000);
      });
    }
]);

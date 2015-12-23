'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class virtualList
 * @interface virtual-list.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:21 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('virtualList', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      // Generate array with 10000 demo items:
      var items = [];
      for (var i = 0; i < 10000; i++) {
          items.push({
              title: 'Item ' + i,
              subtitle: 'Subtitle ' + i
          });
      }

      // Create virtual list
      var virtualList = window.application.virtualList($$('.pages').find('.virtual-list'), {
          // Pass array with items
          items: items,
          // Custom search function for searchbar
          searchAll: function (query, items) {
              var found = [];
              for (var i = 0; i < items.length; i++) {
                  if (items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i);
              }
              return found; //return array with mathced indexes
          },
          // List item Template7 template
          template: '<li>' +
                      '<a href="#" class="item-link item-content">' +
                        '<div class="item-inner">' +
                          '<div class="item-title-row">' +
                            '<div class="item-title">{{title}}</div>' +
                          '</div>' +
                          '<div class="item-subtitle">{{subtitle}}</div>' +
                        '</div>' +
                      '</a>' +
                    '</li>',
          // Item height
          height: 73,
      });
    }
]);

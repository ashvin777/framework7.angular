'use strict';

/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class colorTheme
 * @interface color-theme.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:47 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('colorTheme', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

    function($scope, $rootScope, $stateParams, $log, $q) {
      $$('.ks-color-theme').click(function () {
          var classList = $$('body')[0].classList;
          for (var i = 0; i < classList.length; i++) {
              if (classList[i].indexOf('theme') === 0) classList.remove(classList[i]);
          }
          classList.add('theme-' + $$(this).attr('data-theme'));
      });
      $$('.ks-layout-theme').click(function () {
          var classList = $$('body')[0].classList;
          for (var i = 0; i < classList.length; i++) {
              if (classList[i].indexOf('layout-') === 0) classList.remove(classList[i]);
          }
          classList.add('layout-' + $$(this).attr('data-theme'));
      });
    }
]);

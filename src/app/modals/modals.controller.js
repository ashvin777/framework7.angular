'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class modals
 * @interface modals.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:06:46 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('modals', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      $$('.demo-alert').on('click', function () {
          window.application.alert('Hello!');
      });
      $$('.demo-confirm').on('click', function () {
          window.application.confirm('Are you feel good today?', function () {
              window.application.alert('Great!');
          });
      });
      $$('.demo-prompt').on('click', function () {
          window.application.prompt('What is your name?', function (data) {
              // @data contains input value
              window.application.confirm('Are you sure that your name is ' + data + '?', function () {
                  window.application.alert('Ok, your name is ' + data + ' ;)');
              });
          });
      });
      $$('.demo-login').on('click', function () {
          window.application.modalLogin('Enter your username and password', function (username, password) {
              window.application.alert('Thank you! Username: ' + username + ', password: ' + password);
          });
      });
      $$('.demo-password').on('click', function () {
          window.application.modalPassword('Enter your password', function (password) {
              window.application.alert('Thank you! Password: ' + password);
          });
      });
      $$('.demo-modals-stack').on('click', function () {
          // Open 5 alerts
          window.application.alert('Alert 1');
          window.application.alert('Alert 2');
          window.application.alert('Alert 3');
          window.application.alert('Alert 4');
          window.application.alert('Alert 5');
      });
      $$('.demo-picker-modal').on('click', function () {
          window.application.pickerModal('.picker-modal-demo');
      });
    }
]);

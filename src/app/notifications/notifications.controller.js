'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class notifications
 * @interface notifications.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:07:08 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('notifications', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      $$('.ks-notification-1').on('click', function () {
          window.application.addNotification({
              message: 'Simple message'
          });
      });
      $$('.ks-notification-2').on('click', function () {
          window.application.addNotification({
              message: 'Multi-line message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in magna nisi.',
          });
      });
      $$('.ks-notification-3').on('click', function () {
          window.application.addNotification({
              message: 'Nice yellow button',
              button: {
                  text: 'Click me',
                  color: 'yellow'
              }
          });
      });
      $$('.ks-notification-4').on('click', function () {
          window.application.addNotification({
              message: 'Close me to see Alert',
              button: {
                  text: 'Close',
                  color: 'lightgreen'
              },
              onClose: function () {
                  window.application.alert('Notification closed');
              }
          });
      });
    }
]);

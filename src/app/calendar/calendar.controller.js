'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class calendar
 * @interface calendar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:04:08 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('calendar', ['$scope', '$rootScope', '$stateParams', '$log', '$q',
    function($scope, $rootScope, $stateParams, $log, $q) {
      var calendarDefault = window.application.calendar({
          input: '#ks-calendar-default',
      });
      // With custom date format
      var calendarDateFormat = window.application.calendar({
          input: '#ks-calendar-date-format',
          dateFormat: 'DD, MM dd, yyyy'
      });
      // With multiple values
      var calendarMultiple = window.application.calendar({
          input: '#ks-calendar-multiple',
          dateFormat: 'M dd yyyy',
          multiple: true
      });
      // Range Picker
      var calendarRange = window.application.calendar({
          input: '#ks-calendar-range',
          dateFormat: 'M dd yyyy',
          rangePicker: true
      });
      // Inline with custom toolbar
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
      var calendarInline = window.application.calendar({
          container: '#ks-calendar-inline-container',
          value: [new Date()],
          weekHeader: false,
          header: false,
          footer: false,
          toolbarTemplate:
              '<div class="toolbar calendar-custom-toolbar">' +
                  '<div class="toolbar-inner">' +
                      '<div class="left">' +
                          '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                      '</div>' +
                      '<div class="center"></div>' +
                      '<div class="right">' +
                          '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                      '</div>' +
                  '</div>' +
              '</div>',
          onOpen: function (p) {
              $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
              $$('.calendar-custom-toolbar .left .link').on('click', function () {
                  calendarInline.prevMonth();
              });
              $$('.calendar-custom-toolbar .right .link').on('click', function () {
                  calendarInline.nextMonth();
              });
          },
          onMonthYearChangeStart: function (p) {
              $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
          }
      });
    }
]);

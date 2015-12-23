'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class picker
 * @interface picker.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:07:41 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('picker', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      var today = new Date();

      // iOS Device picker
      var pickerDevice = window.application.picker({
          input: '#ks-picker-device',
          cols: [
              {
                  textAlign: 'center',
                  values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
              }
          ]
      });

      // Describe yourself picker
      var pickerDescribe = window.application.picker({
          input: '#ks-picker-describe',
          rotateEffect: true,
          cols: [
              {
                  textAlign: 'left',
                  values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
              },
              {
                  values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
              },
          ]
      });

      // Dependent values
      var carVendors = {
          Japanese : ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
          German : ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
          American : ['Cadillac', 'Chrysler', 'Dodge', 'Ford']
      };
      var pickerDependent = window.application.picker({
          input: '#ks-picker-dependent',
          rotateEffect: true,
          formatValue: function (picker, values) {
              return values[1];
          },
          cols: [
              {
                  textAlign: 'left',
                  values: ['Japanese', 'German', 'American'],
                  onChange: function (picker, country) {
                      if(picker.cols[1].replaceValues){
                          picker.cols[1].replaceValues(carVendors[country]);
                      }
                  }
              },
              {
                  values: carVendors.Japanese,
                  width: 160,
              },
          ]
      });

      // Custom Toolbar
      var pickerCustomToolbar = window.application.picker({
          input: '#ks-picker-custom-toolbar',
          rotateEffect: true,
          toolbarTemplate:
              '<div class=\'toolbar\'>' +
                  '<div class=\'toolbar-inner\'>' +
                      '<div class=\'left\'>' +
                          '<a href=\'#\' class=\'link toolbar-randomize-link\'>Randomize</a>' +
                      '</div>' +
                      '<div class=\'right\'>' +
                          '<a href=\'#\' class=\'link close-picker\'>That\'s me</a>' +
                      '</div>' +
                  '</div>' +
              '</div>',
          cols: [
              {
                  values: ['Mr', 'Ms'],
              },
              {
                  textAlign: 'left',
                  values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
              },
              {
                  values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
              },
          ],
          onOpen: function (picker) {
              picker.container.find('.toolbar-randomize-link').on('click', function () {
                  var col0Values = picker.cols[0].values;
                  var col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

                  var col1Values = picker.cols[1].values;
                  var col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

                  var col2Values = picker.cols[2].values;
                  var col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];

                  picker.setValue([col0Random, col1Random, col2Random]);
              });
          }
      });

      // Inline date-time
      var pickerInline = window.application.picker({
          input: '#ks-picker-date',
          container: '#ks-picker-date-container',
          toolbar: false,
          rotateEffect: true,
          value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
          onChange: function (picker, values, displayValues) {
              var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
              if (values[1] > daysInMonth) {
                  picker.cols[1].setValue(daysInMonth);
              }
          },
          formatValue: function (p, values, displayValues) {
              return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
          },
          cols: [
              // Months
              {
                  values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                  displayValues: ('January February March April May June July August September October November December').split(' '),
                  textAlign: 'left'
              },
              // Days
              {
                  values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
              },
              // Years
              {
                  values: (function () {
                      var arr = [];
                      for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                      return arr;
                  })(),
              },
              // Space divider
              {
                  divider: true,
                  content: '&nbsp;&nbsp;'
              },
              // Hours
              {
                  values: (function () {
                      var arr = [];
                      for (var i = 0; i <= 23; i++) { arr.push(i); }
                      return arr;
                  })(),
              },
              // Divider
              {
                  divider: true,
                  content: ':'
              },
              // Minutes
              {
                  values: (function () {
                      var arr = [];
                      for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                      return arr;
                  })(),
              }
          ]
      });
    }
]);

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
      var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

      // Simple Dropdown
      var autocompleteDropdownSimple = window.application.autocomplete({
          input: '#autocomplete-dropdown',
          openIn: 'dropdown',
          source: function (autocomplete, query, render) {
              var results = [];
              if (query.length === 0) {
                  render(results);
                  return;
              }
              // Find matched items
              for (var i = 0; i < fruits.length; i++) {
                  if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
              }
              // Render items by passing array with result items
              render(results);
          }
      });

      // Dropdown with all values
      var autocompleteDropdownAll = window.application.autocomplete({
          input: '#autocomplete-dropdown-all',
          openIn: 'dropdown',
          source: function (autocomplete, query, render) {
              var results = [];
              // Find matched items
              for (var i = 0; i < fruits.length; i++) {
                  if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
              }
              // Render items by passing array with result items
              render(results);
          }
      });

      // Dropdown with placeholder
      var autocompleteDropdownPlaceholder = window.application.autocomplete({
          input: '#autocomplete-dropdown-placeholder',
          openIn: 'dropdown',
          dropdownPlaceholderText: 'Try to type "Apple"',
          source: function (autocomplete, query, render) {
              var results = [];
              if (query.length === 0) {
                  render(results);
                  return;
              }
              // Find matched items
              for (var i = 0; i < fruits.length; i++) {
                  if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
              }
              // Render items by passing array with result items
              render(results);
          }
      });

      // Dropdown with ajax data
      var autocompleteDropdownAjax = window.application.autocomplete({
          input: '#autocomplete-dropdown-ajax',
          openIn: 'dropdown',
          preloader: true, //enable preloader
          valueProperty: 'id', //object's "value" property name
          textProperty: 'name', //object's "text" property name
          limit: 20, //limit to 20 results
          dropdownPlaceholderText: 'Try "JavaScript"',
          source: function (autocomplete, query, render) {
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
          }
      });

      // Simple Standalone
      var autocompleteStandaloneSimple = window.application.autocomplete({
          openIn: 'page', //open in page
          opener: $$('#autocomplete-standalone'), //link that opens autocomplete
          backOnSelect: true, //go back after we select something
          source: function (autocomplete, query, render) {
              var results = [];
              if (query.length === 0) {
                  render(results);
                  return;
              }
              // Find matched items
              for (var i = 0; i < fruits.length; i++) {
                  if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
              }
              // Render items by passing array with result items
              render(results);
          },
          onChange: function (autocomplete, value) {
              // Add item text value to item-after
              $$('#autocomplete-standalone').find('.item-after').text(value[0]);
              // Add item value to input value
              $$('#autocomplete-standalone').find('input').val(value[0]);
          }
      });

      // Standalone Popup
      var autocompleteStandalonePopup = window.application.autocomplete({
          openIn: 'popup', //open in page
          opener: $$('#autocomplete-standalone-popup'), //link that opens autocomplete
          backOnSelect: true, //go back after we select something
          source: function (autocomplete, query, render) {
              var results = [];
              if (query.length === 0) {
                  render(results);
                  return;
              }
              // Find matched items
              for (var i = 0; i < fruits.length; i++) {
                  if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
              }
              // Render items by passing array with result items
              render(results);
          },
          onChange: function (autocomplete, value) {
              // Add item text value to item-after
              $$('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
              // Add item value to input value
              $$('#autocomplete-standalone-popup').find('input').val(value[0]);
          }
      });

      // Multiple Standalone
      var autocompleteStandaloneMultiple = window.application.autocomplete({
          openIn: 'page', //open in page
          opener: $$('#autocomplete-standalone-multiple'), //link that opens autocomplete
          multiple: true, //allow multiple values
          source: function (autocomplete, query, render) {
              var results = [];
              if (query.length === 0) {
                  render(results);
                  return;
              }
              // Find matched items
              for (var i = 0; i < fruits.length; i++) {
                  if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
              }
              // Render items by passing array with result items
              render(results);
          },
          onChange: function (autocomplete, value) {
              // Add item text value to item-after
              $$('#autocomplete-standalone-multiple').find('.item-after').text(value.join(', '));
              // Add item value to input value
              $$('#autocomplete-standalone-multiple').find('input').val(value.join(', '));
          }
      });

      // Standalone With Ajax
      var autocompleteStandaloneAjax = window.application.autocomplete({
          openIn: 'page', //open in page
          opener: $$('#autocomplete-standalone-ajax'), //link that opens autocomplete
          multiple: true, //allow multiple values
          valueProperty: 'id', //object's "value" property name
          textProperty: 'name', //object's "text" property name
          limit: 50,
          preloader: true, //enable preloader
          preloaderColor: 'white', //preloader color
          source: function (autocomplete, query, render) {
              var results = [];
              if (query.length === 0) {
                  render(results);
                  return;
              }
              // Show Preloader
              autocomplete.showPreloader();
              // Do Ajax request to Autocomplete data
              $$.ajax({
                  url: 'js/autocomplete-languages.json',
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
          },
          onChange: function (autocomplete, value) {
              var itemText = [],
                  inputValue = [];
              for (var i = 0; i < value.length; i++) {
                  itemText.push(value[i].name);
                  inputValue.push(value[i].id);
              }
              // Add item text value to item-after
              $$('#autocomplete-standalone-ajax').find('.item-after').text(itemText.join(', '));
              // Add item value to input value
              $$('#autocomplete-standalone-ajax').find('input').val(inputValue.join(', '));
          }
      });
    }
]);

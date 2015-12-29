'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule directives
 * @class faAutocomplete
 * @element fa-autocomplete
 * @interface fa-autocomplete.template.html
 * @author Ashvin-iMac
 * @date Wed Dec 23 2015 15:28:43 GMT+0530 (IST)
 */

angular.module('f7.directives')

.directive('faAutocomplete', [ 'extends', 'framework7',

  function(Extends, Framework7) {
    return {
      restrict: 'EAC',
      scope: {
        'data': '=faData',
        'dropdownOpen': '=faDropdownOpen',
        'model': '=faAutocomplete',
        'opener': '=faOpener',
        'openIn': '@faOpenIn',
        'dropdownPlaceholderText': '@faDropdownPlaceholderText',
        'limit': '@faLimit',
        'preloader': '@faPreloader',
        'preloaderColor': '=faPreloaderColor',
        'valueProperty': '@faValueProperty',
        'textProperty': '@faTextProperty',
        'popupCloseText': '=faPopupCloseText',
        'backText': '@faBackText',
        'pageTitle': '@faPageTitle',
        'searchbarPlaceholderText': '@faSearchbarPlaceholderText',
        'searchbarCancelText': '@faSearchbarCancelText',
        'notFoundText': '@faNotFoundText',
        'multiple': '=faMultiple',
        'backOnSelect': '=faBackOnSelect',
        'navbarTheme': '=faNavbarTheme',
        'formTheme': '=faFormTheme',
        'updateInputValueOnSelect': '=faUpdateInputValueOnSelect',
        'expandInput': '=faExpandInput',
        'onChange': '=faOnChange',
        'onOpen': '=faOnOpen',
        'onClose': '=faOnClose',
        'navbarTemplate': '=faNavbarTemplate',
        'itemTemplate': '=faItemTemplate',
        'dropdownTemplate': '=faDropdownTemplate',
        'dropdownItemTemplate': '=faDropdownItemTemplate',
        'dropdownPlaceholderTemplate': '=faDropdownPlaceholderTemplate',
        'source': '=faSource'
      },
      link: function(scope, element, attrs, controller) {
        var config = {};
        var isInput = element.prop('tagName').toLowerCase(0) === 'input';
        //extending all issolated scope into config variable
        Extends.isolatedScope(scope,config);
        //based on the type of element(input or other), changing the way to implement the autocomplete
        if (isInput) {
          config.input = element;
        } else {
          config.opener = element;
        }
        //if source is not defined then apply defult source
        if (config.source === undefined) {
          config.source = function (autocomplete, query, render) {
              //dropdown open by default check
              scope.dropdownOpen = scope.dropdownOpen || false;
              var results = [];
              if (query.length === 0 && !scope.dropdownOpen) {
                  render(results);
                  return;
              }
              // Find matched items
              for (var i = 0; i < scope.data.length; i++) {
                  if (scope.data[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(scope.data[i]);
              }
              // Render items by passing array with result items
              render(results);
          };
        }
        //if its a opener and onclose method is not defined
        if(!isInput && config.onClose === undefined){
          //if multple selection is true
          if(config.multiple){
            config.onClose = function (autocomplete) {
                var value = autocomplete.value;
                if(typeof value[0] !== undefined){
                  //if type of the values in the data is array of strings
                  if(typeof value[0] === 'string'){
                    // Add item text value to item-after
                    $$(element).find('.item-after').text(autocomplete.value.join(', '));
                    // Add item value to input value
                    $$(element).find('input').val(autocomplete.value.join(', '));
                  } else {
                    //if type of the values in the data is array of objects
                    var itemText = [],
                        inputValue = [];
                    for (var i = 0; i < value.length; i++) {
                        itemText.push(value[i].name);
                        inputValue.push(value[i].id);
                    }
                    // Add item text value to item-after
                    $$(element).find('.item-after').text(itemText.join(', '));
                    // Add item value to input value
                    $$(element).find('input').val(inputValue.join(', '));
                  }
                }
            };
          } else {
            //for the cases of multple false
            config.onClose = function (autocomplete) {
                // Add item text value to item-after
                $$(element).find('.item-after').text(autocomplete.value[0]);
                // Add item value to input value
                $$(element).find('input').val(autocomplete.value[0]);
            };
          }
        }
        scope.model = Framework7.getInstance().autocomplete(config);
      }
    };
  }
]);

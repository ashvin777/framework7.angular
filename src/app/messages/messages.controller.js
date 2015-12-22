'use strict';
/*global angular,$$*/
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class messages
 * @interface messages.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:06:38 GMT+0530 (IST)
 */

angular.module('f7.app')

.controller('messages', ['$scope', '$rootScope', '$stateParams', '$log', '$q',

    function($scope, $rootScope, $stateParams, $log, $q) {
      var conversationStarted = false;
      var answers = [
          'Yes!',
          'No',
          'Hm...',
          'I am not sure',
          'And what about you?',
          'May be ;)',
          'Lorem ipsum dolor sit amet, consectetur',
          'What?',
          'Are you sure?',
          'Of course',
          'Need to think about it',
          'Amazing!!!',
      ];
      var people = [
          {
              name: 'Kate Johnson',
              avatar: 'http://lorempixel.com/output/people-q-c-100-100-9.jpg'
          },
          {
              name: 'Blue Ninja',
              avatar: 'http://lorempixel.com/output/people-q-c-100-100-7.jpg'
          },

      ];
      var answerTimeout, isFocused;

      // Initialize Messages
      var myMessages = window.application.messages('.messages');

      // Initialize Messagebar
      var myMessagebar = window.application.messagebar('.messagebar');

      $$('.messagebar a.send-message').on('touchstart mousedown', function () {
          isFocused = document.activeElement && document.activeElement === myMessagebar.textarea[0];
      });
      $$('.messagebar a.send-message').on('click', function (e) {
          // Keep focused messagebar's textarea if it was in focus before
          if (isFocused) {
              e.preventDefault();
              myMessagebar.textarea[0].focus();
          }
          var messageText = myMessagebar.value();
          if (messageText.length === 0) {
              return;
          }
          // Clear messagebar
          myMessagebar.clear();

          // Add Message
          myMessages.addMessage({
              text: messageText,
              avatar: 'http://lorempixel.com/output/people-q-c-200-200-6.jpg',
              type: 'sent',
              date: 'Now'
          });
          conversationStarted = true;
          // Add answer after timeout
          if (answerTimeout) clearTimeout(answerTimeout);
          answerTimeout = setTimeout(function () {
              var answerText = answers[Math.floor(Math.random() * answers.length)];
              var person = people[Math.floor(Math.random() * people.length)];
              myMessages.addMessage({
                  text: answers[Math.floor(Math.random() * answers.length)],
                  type: 'received',
                  name: person.name,
                  avatar: person.avatar,
                  date: 'Just now'
              });
          }, 2000);
      });
    }
]);

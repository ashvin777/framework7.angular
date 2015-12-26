/**
 * No description available
 *
 * @module f7
 * @submodule directives
 * @class fa-calendar
 * @interface fa-calendar.template.html
 * @author Ashvin-iMac
 * @date Thu Dec 24 2015 14:09:59 GMT+0530 (IST)
 */

 describe('Unit: fa-calendar', function() {

  var compile, rootScope;

  beforeEach(module('f7.directives'));
  beforeEach(module('src/directives/fa-calendar/fa-calendar.template.html'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = compile("<fa-calendar></fa-calendar>")(rootScope);
    rootScope.$digest();
    expect(element.html()).toContain("this is the directive");
  });


});
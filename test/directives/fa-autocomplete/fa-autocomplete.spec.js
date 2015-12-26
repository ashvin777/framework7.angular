/**
 * No description available
 *
 * @module f7
 * @submodule directives
 * @class fa-autocomplete
 * @interface fa-autocomplete.template.html
 * @author Ashvin-iMac
 * @date Wed Dec 23 2015 15:28:43 GMT+0530 (IST)
 */

 describe('Unit: fa-autocomplete', function() {

  var compile, rootScope;

  beforeEach(module('f7.directives'));
  beforeEach(module('src/directives/fa-autocomplete/fa-autocomplete.template.html'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));

  it('Replaces the element with the appropriate content', function() {
    var element = compile("<fa-autocomplete></fa-autocomplete>")(rootScope);
    rootScope.$digest();
    expect(element.html()).toContain("this is the directive");
  });


});
/**
 * extends
 *
 * @module f7
 * @submodule factories
 * @class extends
 * @author Ashvin-iMac
 * @date Thu Dec 24 2015 14:11:52 GMT+0530 (IST)
 */

 describe('Unit: extends', function () {

  var $factory;

  beforeEach(function () {
    module('f7.factories');

    inject(function (extends) {
      $factory = extends;
    });
  });

  it('sample test case', function () {
  	expect($factory.coolMethod()).toEqual("cool");
  });
});
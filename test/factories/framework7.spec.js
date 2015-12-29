/**

 Created By : root
 Creation Date : Tue Dec 29 2015 19:15:56 GMT+0530 (IST)
 Helper Name : framework7
 Description : framework7
 
 */

 describe('Unit: framework7', function () {

  var $factory;

  beforeEach(function () {
    module('f7.factories');

    inject(function (framework7) {
      $factory = framework7;
    });
  });

  it('sample test case', function () {
  	expect($factory.coolMethod()).toEqual("cool");
  });
});
/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class about
 * @interface about.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 13:56:28 GMT+0530 (IST)
 */

describe('Unit: about', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('about', {
            $scope: scope,
            $rootScope: rootScope,
            $stateParams: stateParams,
            $log: log,
            $q: q
        });
    }));

    it('this is the sample test', function() {
        
    });

})
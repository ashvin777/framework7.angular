/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class subNavbar
 * @interface sub-navbar.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:37:03 GMT+0530 (IST)
 */

describe('Unit: subNavbar', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('subNavbar', {
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
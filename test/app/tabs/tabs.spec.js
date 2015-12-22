/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class tabs
 * @interface tabs.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:09:16 GMT+0530 (IST)
 */

describe('Unit: tabs', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('tabs', {
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
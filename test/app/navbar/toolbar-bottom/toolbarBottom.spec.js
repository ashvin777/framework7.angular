/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class toolbarBottom
 * @interface toolbar-bottom.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 16:38:09 GMT+0530 (IST)
 */

describe('Unit: toolbarBottom', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('toolbarBottom', {
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
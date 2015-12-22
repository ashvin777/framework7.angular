/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class forms
 * @interface forms.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:05:11 GMT+0530 (IST)
 */

describe('Unit: forms', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('forms', {
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
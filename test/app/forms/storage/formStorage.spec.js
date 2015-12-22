/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formStorage
 * @interface form-storage.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:46:58 GMT+0530 (IST)
 */

describe('Unit: formStorage', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('formStorage', {
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
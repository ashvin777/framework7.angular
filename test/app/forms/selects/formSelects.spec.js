/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class formSelects
 * @interface form-selects.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 15:46:22 GMT+0530 (IST)
 */

describe('Unit: formSelects', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('formSelects', {
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
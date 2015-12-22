/**
 * No description available
 *
 * @module f7
 * @submodule app
 * @class sliderGallery
 * @interface slider-gallery.html
 * @author Ashvin-iMac
 * @date Tue Dec 22 2015 17:32:25 GMT+0530 (IST)
 */

describe('Unit: sliderGallery', function() {

    beforeEach(module('f7.app'));

    var ctrl, scope, rootScope, stateParams, log, q;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('sliderGallery', {
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
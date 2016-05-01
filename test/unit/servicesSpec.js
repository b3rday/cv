'use strict';

describe('service', function() {

    // load modules
    beforeEach(module('cvServices'));

    // Test service availability
    it('check the existence of Personal factory', inject(function(Personal) {
        expect(Personal).toBeDefined();
    }));

    it('check the existence of Experience factory', inject(function(Experience) {
        expect(Experience).toBeDefined();
    }));

    it('check the existence of Skill factory', inject(function(Skill) {
        expect(Skill).toBeDefined();
    }));
});

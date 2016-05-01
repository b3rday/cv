'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('cvFilters'));


  describe('tel', function() {

    it('should convert number to Australian format',
        inject(function(telFilter) {
      expect(telFilter("610474848671")).toBe("0474 848 671");
    }));
  });
});

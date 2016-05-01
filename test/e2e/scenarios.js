'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('cv app', function() {


  it('should automatically redirect to /partials when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/partials");
  });


  describe('cv-detail', function() {

    beforeEach(function() {
      browser.get('index.html#/partials');
    });


    it('should render cv-detail when user navigates to /partials', function() {
      expect(element.all(by.css('.personal-info h1')).first().getText()).
        toMatch(/Personal Information/);
    });

  });
});

'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('pokeApp Application', function() {

  describe('pokemonList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the pokemon list as a user types into the search box', function() {
      var pokemonList = element.all(by.repeater('pokemon in $ctrl.pokemons'));
      var query = element(by.model('$ctrl.query'));

      expect(pokemonList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(pokemonList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(pokemonList.count()).toBe(2);
    });
  });

});

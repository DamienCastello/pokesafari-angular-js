'use strict';

describe('pokemonList', function() {

  // Load the module that contains the `pokemonList` component before each test
  beforeEach(module('pokemonList'));

  // Test the controller
  describe('PokemonListController', function() {

    it('should create a `pokemons` model with 3 pokemons', inject(function($componentController) {
      var ctrl = $componentController('pokemonList');

      expect(ctrl.pokemons.length).toBe(3);
    }));

  });

});
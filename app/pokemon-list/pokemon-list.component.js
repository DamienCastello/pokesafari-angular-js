'use strict';

// Register `pokemonList` component, along with its associated controller and template
angular.
  module('pokemonList').
  component('pokemonList', {
    templateUrl: 'pokemon-list/pokemon-list.template.html',
    controller: function PokemonListController() {
      this.pokemons = [
        {
          name: 'Nexus S'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi'
        }, {
          name: 'MOTOROLA XOOM™'
        }
      ];
    }
  });
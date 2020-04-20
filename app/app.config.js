angular.
  module('pokeApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/pokemons', {
          template: '<pokemon-list></pokemon-list>'
        }).
        when('/pokemons/:pokemonId', {
          template: '<pokemon-detail></pokemon-detail>'
        }).
        otherwise('/pokemons');
    }
  ]);
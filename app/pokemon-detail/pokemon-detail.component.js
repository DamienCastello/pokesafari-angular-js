angular.
  module('pokemonDetail').
  component('pokemonDetail', {
    templateUrl: 'pokemon-detail/pokemon-detail.template.html',
    controller: ['$http', '$routeParams',
      function PokemonDetailController($http, $routeParams) {
          var vm = this;
        
          $http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151.json').then(function (response) {
            console.log("check response in detail", response.data);
            console.log("check params in detail", $routeParams);
            vm.pokemonListUrl = response.data.results;
            $http.get(response.data.results[$routeParams.pokemonId].url).then(function (response){
                vm.pokemon = response.data;
            })
        });
        console.log("final detail", vm.pokemon)
      }
    ]
  });
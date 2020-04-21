'use strict';

// Register `pokemonList` component, along with its associated controller and template
angular.
  module('pokemonList').
  component('pokemonList', {
    templateUrl: 'pokemon-list/pokemon-list.template.html',
    controller: function PokemonListController($http) {
      // METHODS & VARIABLES:
      var self = this;
      self.orderProp = 'id';

      self.redirectToDetail = function redirectToDetail(id) {
        alert("hello" + id)
      };

      self.isReady = false;
      self.escaped = [2, 4];
      self.catched = [1, 3];
      self.classes = [];

      self.getClass = function getClass(id, escapedPokemons, catchedPokemons) {
          if(escapedPokemons.includes(id)){
            return "escaped";
          } else if (catchedPokemons.includes(id)) {
            return "catched";
          } else {
            return "unknown";
          }
      }

      //FETCH DATA :
      $http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151.json').then(function (response) {
        console.log("check response", response.data);
        self.pokemonListUrl = response.data.results;
        self.pokemons = [];
      self.pokemonListUrl.map((pokemonUrl)=>{
        $http.get(pokemonUrl.url).then(function(res){
          self.pokemons.push(res.data);
        });
      });
      self.isReady = true;
      for(let i=0;i<151;i++){
        /* I don't understand why log of self.pokemons[i] is undefined ...
        self.classes.push(self.getClass(self.pokemons[i].id, self.escaped, self.catched)) */
        console.log("check", self.pokemons[i])
      }
      console.log("check pokemons", self.pokemons)
      console.log("check arrays", self.escaped, self.catched);
      console.log("check classes", self.classes)
      });   
        
    }
  });
'use strict';

// Register `pokemonList` component, along with its associated controller and template
angular.
  module('pokemonList').
  component('pokemonList', {
    templateUrl: 'pokemon-list/pokemon-list.template.html',
    controller: function PokemonListController($http) {
      // VARIABLES:
      var vm = this;
      vm.orderProp = 'id';
      vm.isReady = false;
      vm.escaped = [2, 4];
      vm.catched = [1, 3];
      vm.classes = [];



      //FETCH DATA :
      vm.$onInit = function () {
        console.log("enter in init")
        $http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151.json').then(function (response) {
          console.log("check response", response.data);
          vm.pokemonListUrl = response.data.results;
          vm.pokemons = [];
          var promises = vm.pokemonListUrl.map((pokemonUrl) => {
            return $http.get(pokemonUrl.url);
          });
          Promise.all(promises)
            .then(function (pokemonsListDetails) {
              vm.pokemons = pokemonsListDetails.map((detail)=>{
                return detail.data;
              });
              
              console.log("check pokemons", vm.pokemons)
              for (let i = 0; i < 151; i++) {
                //console.log("check", vm.pokemons[i])
              }
              vm.isReady = true;

            })
            .catch(function (error) {
              console.log("error on fetch list details: ", error);
            });
        })
          .catch(function (error) {
            console.log("error on fetch list URL: ", error);
          });
          
      }

      // METHODS & FUNCTIONS
      vm.redirectToDetail = function redirectToDetail(id) {
        alert("hello" + id)
      };

      vm.getClass = function getClass(id, escapedPokemons, catchedPokemons) {
        if (escapedPokemons.includes(id)) {
          return "escaped";
        } else if (catchedPokemons.includes(id)) {
          return "catched";
        } else {
          return "unknown";
        }
      }

    }
  });
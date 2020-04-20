'use strict';

// Register `pokemonList` component, along with its associated controller and template
angular.
  module('pokemonList').
  component('pokemonList', {
    templateUrl: 'pokemon-list/pokemon-list.template.html',
    controller: function PokemonListController($http) {
      var self = this;
      self.orderProp = 'id';

      self.redirectToDetail = function redirectToDetail(id) {
        alert("hello" + id)
      };

      self.escaped = [];
      self.catched = [];
      self.classes = [];
      self.getClass = function getClass(data, escapedPokemon, catchedPokemon) {
       /*  escapedPokemon.map((escaped)=>{
          if(escaped===id){
           console.log('escaped', escaped, id)
           self.classes.push('escaped');
            return 'escaped'
          }   
         });
         catchedPokemon.map((catched, id)=>{
           if(catched===id){
             console.log('catched', catched)
             self.classes.push('catched');
             return 'catched'
           }   
          });
          console.log('unknown')
          self.classes.push('unknown');
          return 'unknown';  */


      }
      $http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151.json').then(function (response) {
        console.log("check response", response.data);
        self.pokemonListUrl = response.data.results;
        self.pokemons = [];
      self.pokemonListUrl.map((pokemonUrl)=>{
        $http.get(pokemonUrl.url).then(function(res){
          self.pokemons.push(res.data);
          //self.getClass(res.data, self.escaped, self.catched)

          /*
          //just push into arrays to simulate escaped or catched
          if(res.data.id===1){
            self.escaped.push(res.data)
          }
          if(res.data.id===2){
            self.catched.push(res.data)
          }
          //now test if includes
          console.log("check", self.pokemons)
          if(self.escaped.includes(self.pokemons[res.data.id])){
            self.classes.push("escaped")
          } else if (self.catched.includes(self.pokemons[res.data.id])){
            self.classes.push("catched")
          } else {
            self.classes.push("unknown")
          }
          */
         
        });
      });

      console.log("check pokemons", self.pokemons)
      console.log("check arrays", self.escaped, self.catched);
      console.log("check classes", self.classes)
      });      
    }
  });

  //"background-color: #185400; background-image: url('https://www.transparenttextures.com/patterns/bright-squares.png');"
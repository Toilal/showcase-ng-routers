(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.dice', {
        url: '/dice/{diceCount:int}/{diceMax:int}',
        templateUrl: 'app/dice/dice.html',
        controller: 'DiceController',
        controllerAs: 'dice',
        resolve: {
          dices: function($stateParams) {
            var dices = [];
            for (var i = 0; i < $stateParams.diceCount; i++) {
              dices.push(NaN);
            }
            return dices;
          }
        }
      });
  }

})();

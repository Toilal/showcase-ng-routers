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
        params: {
          message: undefined
        },
        templateUrl: 'app/dice/dice.html',
        controller: 'DiceController',
        controllerAs: 'dice',
        resolve: {
          dices: function($stateParams) {
            if ($stateParams.diceCount > 100) {
              $stateParams.diceCount = 100;
            } else if ($stateParams.diceCount < 1) {
              $stateParams.diceCount = 1;
            }

            if ($stateParams.diceMax < 1) {
              $stateParams.diceMax = 1;
            }

            var dices = [];
            for (var i = 0; i < $stateParams.diceCount; i++) {
              dices.push(NaN);
            }
            return dices;
          }
        }
      });

    $stateProvider
      .state('main.dice-choice', {
        url: '/dice/',
        templateUrl: 'app/dice/dice-choice.html',
        controller: 'DiceChoiceController',
        controllerAs: 'diceChoice'
      });
  }

})();

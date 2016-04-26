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
        controllerAs: 'dice'
      });
  }

})();

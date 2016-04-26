(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .directive('diceConfigurator', diceConfigurator);

  /** @ngInject */
  function diceConfigurator() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/diceConfigurator/diceConfigurator.html',
      scope: {
        count: '=',
        max: '=',
        message: '=',
        handler: '&'
      },
      controller: DiceConfiguratorController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DiceConfiguratorController() {

    }
  }

})();

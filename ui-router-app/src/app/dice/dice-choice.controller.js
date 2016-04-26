(function () {
  'use strict';

  angular
    .module('uiRouterApp')
    .controller('DiceChoiceController', DiceChoiceController);

  /** @ngInject */
  function DiceChoiceController($state) {
    var vm = this;

    vm.count = 5;
    vm.max = 6;
    vm.message = '';

    function goToDiceState() {
      return $state.go('main.dice', {diceCount: vm.count, diceMax: vm.max, message: vm.message });
    }

    vm.goToDiceState = goToDiceState;

  }
})();

(function () {
  'use strict';

  angular
    .module('uiRouterApp')
    .controller('DiceController', DiceController);

  /** @ngInject */
  function DiceController(_, $timeout, $q, $stateParams, dices) {
    var vm = this;

    vm.diceCount = $stateParams.diceCount;
    vm.diceMax = $stateParams.diceMax;
    vm.dices = dices;
    
    vm.total = 0;

    function throwDice(i) {
      var oldValue = vm.dices[i];
      vm.dices[i] = NaN;
      if (!isNaN(oldValue)) {
        vm.total -= oldValue;
      }

      var timeout = $timeout(function () {
        var value = _.random(1, vm.diceMax);
        vm.dices[i] = value;
        vm.total += value;
      }, _.random(500, 3000));
      return timeout;
    }

    function throwAllDices() {
      var throws = [];
      for (var i = 0; i < vm.diceCount; i++) {
        throws.push(throwDice(i));
      }

      return $q.all(throws);
    }

    function isThrown(diceValue) {
      return !isNaN(diceValue) && angular.isNumber(diceValue);
    }

    vm.throwAllDices = throwAllDices;
    vm.throwDice = throwDice;
    vm.isThrown = isThrown;
  }
})();

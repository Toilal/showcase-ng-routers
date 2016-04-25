(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .controller('MessageController', MessageController);

  /** @ngInject */
  function MessageController() {
    var vm = this;

    function send() {
      alert("Sending message ...");
    }

    vm.send = send;
  }
})();

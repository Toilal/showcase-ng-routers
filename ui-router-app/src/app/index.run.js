(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

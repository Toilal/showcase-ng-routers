(function() {
  'use strict';

  angular
    .module('ngRouteApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

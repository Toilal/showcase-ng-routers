(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();

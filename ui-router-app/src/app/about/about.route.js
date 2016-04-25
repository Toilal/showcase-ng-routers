(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('about', {
        parent: 'main',
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      });
  }

})();

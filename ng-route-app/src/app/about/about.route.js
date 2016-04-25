(function() {
  'use strict';

  angular
    .module('ngRouteApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      });
  }

})();

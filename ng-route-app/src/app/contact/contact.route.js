(function() {
  'use strict';

  angular
    .module('ngRouteApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      });
  }

})();

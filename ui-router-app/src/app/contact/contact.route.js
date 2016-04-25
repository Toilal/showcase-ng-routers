(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('contact', {
        parent: 'main',
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      });
  }

})();

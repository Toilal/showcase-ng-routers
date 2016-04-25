(function() {
  'use strict';

  angular
    .module('uiRouterApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })

      .state('main.contact.message', {
        url: '/message',
        views: {
          captcha: {
            templateUrl: 'app/contact/captcha/captcha.html',
            controller: 'CaptchaController',
            controllerAs: 'captcha'
          },
          '': {
            templateUrl: 'app/contact/message/message.html',
            controller: 'MessageController',
            controllerAs: 'message'
          }
        }
      });
  }

})();

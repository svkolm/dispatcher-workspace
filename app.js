(function () {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'sectionService',
      'section'
    ])
    .config(config);

  config.$inject = ['sectionProvider', '$routeProvider'];


  function config(sectionProvider, routeProvider) {
    var firstSection = 1;

    sectionProvider
      .section(firstSection)
      .section(2)
      .section(3)
      .section(4);

    routeProvider.otherwise({
      redirectTo:  '/section/' + firstSection
    });
  }
}());

(function () {
  'use strict';

  angular
    .module('section', [
      'sectionService',
      'orderService'
    ])
    .config(sectionConfig);

  sectionConfig.$inject = ['$routeProvider'];


  function sectionConfig(routeProvider) {
    routeProvider.when('/section/:n', {
      templateUrl: 'section/section.html',
      controller: 'Section',
      controllerAs: 'section'
    });
  }
}());

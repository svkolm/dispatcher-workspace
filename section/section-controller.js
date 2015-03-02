(function () {
  'use strict';

  angular
    .module('section')
    .controller('Section', Section);

  Section.$inject = ['$routeParams', 'section'];


  function Section($routeParams, section) {
    section.setActive($routeParams.n);
  }
}());

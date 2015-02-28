(function () {
  'use strict';

  angular
    .module('section')
    .controller('Section', Section);

  Section.$inject = ['$routeParams', 'section'];


  function Section($routeParams, section) {
    var ctrl = this;

    ctrl.n = $routeParams.n;
    section.setActive($routeParams.n);
  }
}());

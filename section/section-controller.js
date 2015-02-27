(function () {
  'use strict';

  angular
    .module('section')
    .controller('Section', Section);

  Section.$inject = ['$routeParams'];


  function Section($routeParams) {
    var ctrl = this;

    ctrl.n = $routeParams.n;
  }
}());

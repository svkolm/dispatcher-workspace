(function () {
  'use strict';

  angular
    .module('app')
    .controller('Tab', Tab);

  Tab.$inject = ['section'];


  function Tab(section) {
    var ctrl = this;

    ctrl.sections = section.all;
    ctrl.isActive = section.isActive;
  }
}());

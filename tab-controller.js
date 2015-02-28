(function () {
  'use strict';

  angular
    .module('app')
    .controller('Tab', Tab);

  Tab.$inject = ['section'];


  function Tab(section) {
    this.isActive = section.isActive;
  }
}());

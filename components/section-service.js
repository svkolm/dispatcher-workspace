(function () {
  'use strict';

  angular
    .module('sectionService', [])
    .factory('section', section);


  function section() {
    var active, s;

    s = {
      setActive: setActive,
      isActive: isActive
    };

    return s;


    function setActive(section) {
      active = section;
    }

    function isActive(section) {
      return section === active;
    }
  }
}());

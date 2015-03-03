(function () {
  'use strict';

  angular
    .module('sectionService', [])
    .provider('section', SectionProvider);


  function SectionProvider() {
    var pr = this,
        sections = [];

    pr.section = section;
    pr.$get = getSection;


    function section(n) {
      sections.push(String(n));

      return pr;
    }

    function getSection() {
      var inactiveSections,
          active,
          s;

      initInactiveSections();

      s = {
        active: getActive,
        setActive: setActive,
        isActive: isActive,
        all: getAll,
        inactive: getInactive
      };

      return s;


      function initInactiveSections() {
        var inactive, i;

        inactiveSections = {};
        for (i = 0; i < sections.length; i++) {
          inactive = sections.slice(0);
          inactive.splice(i, 1);
          inactiveSections[sections[i]] = inactive;
        }
      }

      function getActive() {
        return active;
      }

      function setActive(section) {
        active = section;
      }

      function isActive(section) {
        return section === active;
      }

      function getAll() {
        return sections;
      }

      function getInactive() {
        return inactiveSections[active];
      }
    }
  }
}());

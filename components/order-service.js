(function () {
  'use strict';

  angular
    .module('orderService', [
      'sectionService'
    ])
    .factory('order', order);

  order.$inject = ['section'];


  function order(section) {
    var orderSections, s;

    initOrderSections();

    s = {
      availSections: section.inactive,
      activeSection: activeSection,
      add: add,
      moveTo: moveTo
    };

    return s;


    function initOrderSections() {
      var sections, i;

      orderSections = {};
      sections = section.all();
      for (i = 0; i < sections.length; i++) {
        orderSections[sections[i]] = [];
      }
    }

    function activeSection() {
      return orderSections[section.active()];
    }

    function add(order) {
      activeSection().push(order);
    }

    function moveTo(order, section) {
      var orderSection, orderIndex;

      orderSection = activeSection();
      orderIndex = orderSection.indexOf(order);
      orderSection.splice(orderIndex, 1);
      orderSections[section].push(order);
    }
  }
}());

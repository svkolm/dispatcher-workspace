(function () {
  'use strict';

  angular
    .module('orderService', [
      'sectionService',
      'localStorage'
    ])
    .factory('order', order);

  order.$inject = ['section', 'storage'];


  function order(section, storage) {
    var storageKey = 'ORDER-SECTIONS',
        orderSections,
        s;

    initOrderSections();

    s = {
      store: store,
      clear: clear,
      availSections: section.inactive,
      activeSection: activeSection,
      add: add,
      moveTo: moveTo
    };

    return s;


    function initOrderSections() {
      if (storage.support()) {
        orderSections = storage.object(storageKey);
      }
      if (!orderSections) {
        emptyOrderSections();
      }
    }

    function emptyOrderSections() {
      var sections, i;

      orderSections = {};
      sections = section.all();
      for (i = 0; i < sections.length; i++) {
        orderSections[sections[i]] = [];
      }
    }

    function store() {
      if (storage.support()) {
        storage.store(storageKey, orderSections);
      }
    }

    function clear() {
      storage.remove(storageKey);
      emptyOrderSections();
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

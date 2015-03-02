(function () {
  'use strict';

  angular
    .module('orderService')
    .config(testConfig)
    .run(testInit);

  testConfig.$inject = ['$provide'];


  function testConfig($provide) {
    $provide.decorator('order', decorate);

    decorate.$inject = ['$delegate'];


    function decorate(order) {
      var count = 100;

      order.load = load;

      return order;


      function load() {
        for (var i = 1; i <= 4; i++) {
          order.add('#' + count + '.' + i);
          count++;
        }
      }
    }
  }

  function testInit(section, order) {
    var sections, i;

    sections = section.all();
    for (i = 0; i < sections.length; i++) {
      section.setActive(sections[i]);
      order.load();
    }
    section.setActive(undefined);
  }
}());

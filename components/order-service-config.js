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
      var count = 101;

      order.load = load;

      return order;


      function load() {
        var i, n;

        for (i = 0; i < 4; i++) {
          n = '#' + Date.now() + '.' + count + '.' + (i % 4 + 1);
          order.add(n);
          count++;
        }
        order.store();
      }
    }
  }

  function testInit(section, order, $location) {
    var sections, i;

    if ($location.path() === '') {
      order.clear();
      sections = section.all();
      for (i = 0; i < sections.length; i++) {
        section.setActive(sections[i]);
        order.load();
      }
      section.setActive(undefined);
    }
  }
}());

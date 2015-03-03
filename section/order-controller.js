(function () {
  'use strict';

  angular
    .module('section')
    .controller('Order', Order);

  Order.$inject = ['order'];


  function Order(order) {
    var ctrl = this;

    ctrl.availSections = order.availSections;
    ctrl.activeSection = order.activeSection;
    ctrl.moveTo = moveOrder;


    function moveOrder(ord, section) {
      order.moveTo(ord, section);
      order.store();
    }
  }
}());

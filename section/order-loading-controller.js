(function () {
  'use strict';

  angular
    .module('section')
    .controller('OrderLoading', OrderLoading);

  OrderLoading.$inject = ['order'];


  function OrderLoading(order) {
    this.load = order.load;
  }
}());

(function () {
  'use strict';

  angular
    .module('localStorage', [])
    .factory('storage', storage);

  storage.$inject = ['$window'];


  function storage($window) {
    var localStorage, s;

    localStorage = $window.localStorage;

    s = {
      support: support,
      object: object,
      store: store,
      remove: remove
    };

    return s;


    function support() {
      return localStorage ? true : false;
    }

    function object(key) {
      var obj, jsonObj;

      jsonObj = localStorage[key];
      if (jsonObj) {
        obj = JSON.parse(jsonObj);
      }

      return obj;
    }

    function store(key, obj) {
      if (key) {
        localStorage[key] = JSON.stringify(obj);
      }
    }

    function remove(key) {
      localStorage.removeItem(key);
    }
  }
}());

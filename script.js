(function(angular) {
    'use strict';

    angular
        .module('dedojr')
        .filter('destacar', destacar);

    destacar.$inject = [];

    function destacar() {
        return function(value, filtro) {
            return filtro ? value.replace(new RegExp('(' + filtro + ')', 'gi'), '<span class="destacar">$1</span>') : value;
        };
    };
})(window.angular);

(function () {
    'use strict';

    angular.module('app.home', [])

            .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        var date = new Date();
        vm.contactForm = {date: date};
        vm.update = update;

        function update(contact) {
            vm.contactForm = angular.copy(contact);
        }
    }
})();

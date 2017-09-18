(function () {
    'use strict';

    angular.module('app.login', [])

            .controller('LoginController', LoginController);

    LoginController.$inject = [];

    function LoginController() {
        var vm = this;

        var date = new Date();
        vm.contactForm = {date: date};
        vm.update = update;

        function update(contact) {
            vm.contactForm = angular.copy(contact);
        }
    }
})();

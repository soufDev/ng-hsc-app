(function () {
    'use strict';

    angular.module('app.login', ['ngFeathers'])
        .config(function ($feathersProvider) {
            $feathersProvider.setEndpoint('');
            $feathersProvider.useSocket(false);
        })
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$feathers'];

    function LoginController($feathers) {
        var vm = this;
        vm.formBean = {login : "haha"};

        vm.authenticate = function () {
            $feathers.authenticate({
                //TODO : finish this.
            }).then(function (result) {
                console.log('Authenticated!', result)
            }).catch(function (error) {
                console.error('Error authenticating!', error)
            });
        };

        vm.authenticate();
    };
})();

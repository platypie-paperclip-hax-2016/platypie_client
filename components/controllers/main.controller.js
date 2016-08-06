;(function() {
    angular.module('app')
        .controller("MainController", MainController)

    function MainController() {
        var $ctrl = this;

        $ctrl.foo = "bar";
    }
})()
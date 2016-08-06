;(function() {
    angular.module("app")
        .directive("mainHeader", mainHeader)
    
    function mainHeader() {
        return {
            templateUrl: "components/directives/main.header.html",
            bindings: {
                isResults: "="
            },
            restrict: "E"
        }
    }
})()
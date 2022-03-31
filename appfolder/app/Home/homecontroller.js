app.controller("homectrl", function ($scope, $translate, $rootScope) {
    $rootScope.English = function () {
        $translate.use('en');
    }
    $rootScope.Hindi = function () {
        $translate.use('hi');
    }
});
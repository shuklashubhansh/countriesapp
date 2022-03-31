app.controller("countriesctrl", function ($scope, httpservice, $rootScope) {
    var countriescontroller = this;
    $scope.erroroccured = false;
    $rootScope.showloader = false;
    $scope.allcountries = "";
    $scope.searchfield = '';
    $scope.obj = Object;

    countriescontroller.init = function () {
        $rootScope.showloader = true;
        httpservice.getdata("https://restcountries.com/v3.1/all").then(function (res) {
            $rootScope.showloader = false;
            $scope.erroroccured = false;
            httpservice.countriesdata = res.data;
            $scope.allcountries = httpservice.countriesdata;
        }, function (error) {
            $rootScope.showloader = false;
            $scope.erroroccured = true;
        });
    }
    countriescontroller.init();
});
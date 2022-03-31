app.service('httpservice', function ($q, $http) {
  this.getdata = function (url) {
    var q = $q.defer();
    $http.get(url).then(function (response) {
      q.resolve(response);
    }, function error(error) {
      q.reject(error);
    });
    return q.promise;
  }
});
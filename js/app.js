var app = angular.module('cleanurl', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World Wide Web';
});


app.filter('cleanurl', function() {
  return function(input) {
    if (input) {
      return input.toLowerCase()
        .replace(/^-+|-+$/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .trim();
    }
  }
})
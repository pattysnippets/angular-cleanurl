/**
 * Created by Joyce Cam on 30/12/2014.
 *
 * Simple and easy-to-implement angular clear inpur directive.
 *
 */

var cleanurl = angular.module('cleanurl', []);

cleanurl.filter('cleanurl', function() {
  return function(input) {
    if (input) {
      return input.toLowerCase()
        .replace(/^-+|-+$/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .trim();
    }
  }
});

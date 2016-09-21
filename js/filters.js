angular.module('homeFilters', [])
 .filter('htmlToPlaintext', function() {
  return function(text) {
      return String(text).replace(/<[^>]+>/gm, '').replace("Continue reading on Medium »", "");
  };
 })
 .filter('gllimg', function() {
  return function(text) {
      return String(text).replace("=h310", "=w500");
  };
 })

.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + ' %';
  };
}]);
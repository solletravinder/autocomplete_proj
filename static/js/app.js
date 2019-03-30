'use strict'
var myApp = angular.module('myautocomplete', [
	'ngCookies',
	'angucomplete-alt',
]);
myApp.controller('search_for_value', ['$scope', '$http', '$location', "$rootScope", function($scope, $http, $location, $rootScope){
    $scope.wordSelected = ''
    console.log($location.host())
    $scope.searchWordAPI = function(userInputString, timeoutPromise){
        var result = $http.post($location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/api/search_by_prefix/", {term: userInputString}, {timeout: timeoutPromise});
        // var result = $http.post("{% url 'search_by_prefix' %}", {term: userInputString}, {timeout: timeoutPromise});
        // console.log(result.$$state)
        // $scope.wordSelected = result.$$state.value.data
        return result
    }
}]);
myApp.run(function ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
});
myApp.config(['$httpProvider', function ($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
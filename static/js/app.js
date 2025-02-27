'use strict'
var myApp = angular.module('myautocomplete', [
    'angucomplete-alt',
]);
myApp.controller('search_for_value', ['$scope', '$http', '$location', "$rootScope", function($scope, $http, $location, $rootScope){
    $scope.wordSelected = ''
    $scope.searchWordAPI = function(userInputString, timeoutPromise){
        var result = $http.post($location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/api/search_by_prefix/", {term: userInputString}, {timeout: timeoutPromise});
        return result
    }
}]);
// myApp.run(function ($http, $cookiesProvider) {
//     // console.log($cookies.getAll())
//     // console.log($cookies.get('csrftoken'))
//     if($cookiesProvider.csrftoken){
//         $http.defaults.headers.common['X-CSRFToken'] = $cookiesProvider.csrftoken;
//     }else{
//         var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
//         $http.defaults.headers.common['X-CSRFToken'] = csrftoken
//     }
//     console.log($http.defaults.headers.common)

// });
myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
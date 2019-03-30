'use strict'
var myApp = angular.module('myautocomplete', [
  'angucomplete-alt',
]);
myApp.controller('search_for_value', ['$scope', '$http', '$location', "$rootScope", function($scope, $http, $location, $rootScope){
    $scope.wordSelected = ''
    console.log($location.path())
    $scope.searchWordAPI = function(userInputString, timeoutPromise){
        var result = $http.post("/api/search_by_prefix/", {term: userInputString}, {timeout: timeoutPromise});
        // console.log(result.$$state)
        // $scope.wordSelected = result.$$state.value.data
        return result
    }
}]);
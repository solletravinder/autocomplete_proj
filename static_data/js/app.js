'use strict'
var myApp = angular.module('myautocomplete', [
  'angucomplete-alt',
]);
myApp.controller('search_for_value', ['$scope', '$http', "$rootScope", function($scope, $http, $rootScope){
    $scope.wordSelected = ''
    $scope.searchWordAPI = function(userInputString, timeoutPromise){
        var result = $http.post( "http://localhost:1200/api/search_by_prefix/", {term: userInputString}, {timeout: timeoutPromise});
        console.log(result.$$state)
        // $scope.wordSelected = result.$$state.value.data
        return result
    }
}]);
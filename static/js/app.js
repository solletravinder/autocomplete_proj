'use strict'
var myApp = angular.module('myautocomplete', [
    'ngCookies',
    'angucomplete-alt',
]);
myApp.controller('search_for_value', ['$scope', '$http', '$location', "$rootScope", function($scope, $http, $location, $rootScope){
    $scope.wordSelected = ''
    console.log($location.host())
    // $.get('CSRFTokenManager.do', function(data) {
    //    var send = XMLHttpRequest.prototype.send,
    //    token =data;
    //    document.cookie='X-CSRF-Token='+token;
    //    XMLHttpRequest.prototype.send = function(data) {
    //        this.setRequestHeader('X-CSRF-Token',token);
    //        //dojo.cookie("X-CSRF-Token", "");

    //        return send.apply(this, arguments);
    //    };
    // });
    $scope.searchWordAPI = function(userInputString, timeoutPromise){
        var result = $http.post($location.protocol() + '://'+ $location.host() +':'+  $location.port()+"/api/search_by_prefix/", {term: userInputString}, {timeout: timeoutPromise});
        // var result = $http.post("{% url 'search_by_prefix' %}", {term: userInputString}, {timeout: timeoutPromise});
        // console.log(result.$$state)
        // $scope.wordSelected = result.$$state.value.data
        return result
    }
}]);
myApp.run(function ($http, $cookies) {
    console.log('token', $http.defaults.headers.common['X-CSRFToken'])
    if($cookies.csrftoken){
        console.log("cookie", $cookies.csrftoken)
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
    }else{
        var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
        console.log("without cookie", csrftoken)
        $http.defaults.headers.common['X-CSRFToken'] = csrftoken
    }

});
myApp.config(['$httpProvider', function ($httpProvider) {
    console.log("headers", $httpProvider.defaults.xsrfHeaderName, $httpProvider.defaults.xsrfCookieName)
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
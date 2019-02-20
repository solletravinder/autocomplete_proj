// myApp.service("uploadImage",['$http', '$rootScope', "Upload", function($http, $rootScope, Upload){
//     var apiCalling = function(method, api, send_data, access_token){
//         return Upload.upload({
//             method : method,
//             url : $rootScope.host + api,
//             data : send_data,
//             headers: {
//                 "Content-Type": undefined
//             }
//         })
//         .error(function(){
//             $rootScope.deactivate_loading()
//             alert("Something went wrong. Please refresh the page")
//         })
//         .then(function(result){
//             // console.log(result)
//             return result;
//         })
//     }
//     return { apiCalling: apiCalling };
// }])
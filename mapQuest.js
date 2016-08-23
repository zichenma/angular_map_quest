
var myMap = angular.module('mapQuest', [])

.controller('mapController', function ($scope, $http) {
    //1. Define variables and callback
    $scope.depart = "Boston, MA";
    $scope.arrive = "Cambridge, MA";
    $scope.callback = "JSON_CALLBACK";
    //2. main search function
    $scope.doSearch = function () {
        $http.jsonp(
            //3. get my own Map Quest API key 4. using encodeURI function to encode URI 5.using JSON_CALLBACK
				"http://open.mapquestapi.com/directions/v2/route?key=wlqyk7KuRIamDG1Jqi2fsSJMTRvNP5q9&from=" + encodeURIComponent($scope.depart) + "&to=" + encodeURIComponent($scope.arrive) + "&callback=" + $scope.callback + " ",
				{
                    //define parameters
				    params: {
				        from: $scope.depart,
				        to: $scope.arrive,
                        callback: $scope.callback
				    }
				})
            //if request API successfully, get the API data and print it into console.
				.success(function (data) {
				    $scope.data = data;
				    console.log(data);
				})
            //if failed, print a error message in console.
				.error(function (data) {
				    console.log("Something Wrong!");
				});
    };

    $scope.doSearch();

});
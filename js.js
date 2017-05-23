
var myMap = angular.module('myReport', [])

.controller('mainController', function ($scope, $http) {
    $scope.doSearch = function () {
        $http.get(
				"http://apis.firsthelpfinancial.com/ords/fhfcoll/call_vol_overtime_by_colector/"
			).success(function (data) {
                    $scope.data = data;
				    console.log(data);
				})
         .error(function (data) {
				    console.log("Something Wrong!");
			});
    };
	$scope

});
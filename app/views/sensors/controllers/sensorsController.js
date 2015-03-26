/**
 * Created by ssp on 25/3/2015.
 */

var sensors = angular.module("sensors.module",[]);



sensors.controller("sensorsController",['$scope',
    function($scope){
console.log("sensorsController")
        $scope.hello="hello";
}]);

//var phonecatControllers = angular.module('phonecatControllers', []);
//
//phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
//    function ($scope, $http) {
//        $http.get('phones/phones.json').success(function(data) {
//            $scope.phones = data;
//        });
//
//        $scope.orderProp = 'age';
//    }]);
//
sensors.controller('sensorDetailsController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.sensorId = $routeParams.sensorId;
        console.log($routeParams);
    }]);
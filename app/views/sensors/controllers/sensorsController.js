/**
 * Created by ssp on 25/3/2015.
 */

var sensors = angular.module("sensors.module",[]);



sensors.controller("sensorsController",['$scope','sensorsDao','$route', '$routeParams', '$location',
    function($scope,sensorsDao,$route, $routeParams, $location){
        console.log("sensorsController")
        $scope.items = ['learn Sortable',
            'use gn-sortable',
            'Enjoy'];
        $scope.hello="hello";
        $scope.sensors={
            location:{
                latitude:37.956512,
                longitude:23.803622
            }
        }

        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        console.log($scope.$route);
       // $scope.sensors = sensorsDao.getSensors();
        console.log($scope.sensors);
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
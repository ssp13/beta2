/**
 * Created by ssp on 25/3/2015.
 */

var sensors = angular.module("sensors.module",['ngMaterial','ui.bootstrap','ngMap']);



sensors.controller("sensorsController",['$scope','sensorsDao','$route', '$routeParams', '$location','$mdDialog','$modal','breadcrumbs',
    function($scope,sensorsDao,$route, $routeParams, $location,$mdDialog,$modal,breadcrumbs){
        console.log("sensorsController")
        $scope.breadcrumbs = breadcrumbs;
        $scope.items = ['learn Sortable',
            'use gn-sortable',
            'Enjoy'];
        $scope.stores = {
            foo: { position:[41, -87], items: [1,2,3,4]},
            bar:{ position:[41, -83], items: [5,6,7,8]}
        };
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.zippyVisible=true;
        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.sensors={
            location:{
                latitude:37.956512,
                longitude:23.803622
            }
        };

        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        console.log($scope.$route);
       // $scope.sensors = sensorsDao.getSensors();
        console.log($scope.sensors);

        $('.sortable').each(function () {
            var options = {
                group: 'widgets',
                ghostClass: "ghost"
            }

            // if widget has title - use it for dragplace
            if ($(this).find('.title')[0]) {
                options.handle = ".title"
            }

            Sortable.create(this, options);
        });

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
sensors.controller('sensorDetailsController', ['$scope', '$routeParams','sensorsDao','breadcrumbs',
    function($scope, $routeParams, sensorsDao,breadcrumbs) {
        $scope.sensorId = $routeParams.sensorId;
        $scope.breadcrumbs = breadcrumbs;
        $scope.sensorDetails=[{timestamp:"3",name:"weather_1",status:"live",value:"23",battery:"3%"},{timestamp:"3",name:"weather_1",status:"live",value:"23",battery:"3%"}];
       
        
        



    }]);


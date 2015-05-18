/**
 * Created by ssp on 25/3/2015.
 */

var sensors = angular.module("sensors.module",['ngMaterial','ui.bootstrap','ngMap']);



sensors.controller("sensorsController",['$scope','sensorsDao','$route', '$routeParams', '$location','$mdDialog','$modal',
    function($scope,sensorsDao,$route, $routeParams, $location,$mdDialog,$modal){
        console.log("sensorsController")
        
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
        $(function () {

            Highcharts.setOptions({
                global : {
                    useUTC : false
                }
            });

            // Create the chart
            $('#container').highcharts('StockChart', {
                chart : {
                    events : {
                        load : function () {

                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function () {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.round(Math.random() * 100);
                                series.addPoint([x, y], true, true);
                            }, 100000);
                        }
                    }
                },

                rangeSelector: {
                    buttons: [{
                        count: 1,
                        type: 'minute',
                        text: '1M'
                    }, {
                        count: 5,
                        type: 'minute',
                        text: '5M'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false,
                    selected: 0
                },

                title : {
                    text : 'Live random data'
                },

                exporting: {
                    enabled: false
                },

                series : [{
                    name : 'Random data',
                    data : (function () {
                        // generate an array of random data
                        var data = [], time = (new Date()).getTime(), i;

                        for (i = -999; i <= 0; i += 1) {
                            data.push([
                                time + i * 1000,
                                Math.round(Math.random() * 100)
                            ]);
                        }
                        return data;
                    }())
                }]
            });

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
sensors.controller('sensorDetailsController', ['$scope', '$routeParams','sensorsDao'
    function($scope, $routeParams,sensorsDao) {
        $scope.sensorId = $routeParams.sensorId;
        console.log($routeParams);
        $scope.sensorDetails=[{timestamp:"3",name:"weather_1",status:"live",value:"23",battery:"3%"},{timestamp:"3",name:"weather_1",status:"live",value:"23",battery:"3%"}];
        $scope.data={};
        
        



    }]);


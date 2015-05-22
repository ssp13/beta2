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
        
        
        $scope.barChart = {}, $scope.barChart.data = [
            {
                color: '#fbfbfb',
                label: "Direct Visits",
                data: [
                    [3, 2], [4, 5], [5, 4], [6, 11], [7, 12], [8, 11], [9, 8], [10, 14], [11, 12], [12, 16], [13, 9],
                    [14, 10], [15, 14], [16, 15], [17, 9]
                ],

                lines: {
                    show: true,
                    fill: true,
                    lineWidth: .1,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0
                            }, {
                                opacity: 0.4
                            }
                        ]
                    }
                },
                points: {
                    show: false
                },
                shadowSize: 0
            },
            {
                color: '#fbfbfb',
                label: "Referral Visits",
                data: [
                    [3, 10], [4, 13], [5, 12], [6, 16], [7, 19], [8, 19], [9, 24], [10, 19], [11, 18], [12, 21], [13, 17],
                    [14, 14], [15, 12], [16, 14], [17, 15]
                ],
                bars: {
                    order: 1,
                    show: true,
                    borderWidth: 0,
                    barWidth: 0.4,
                    lineWidth: .5,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            }, {
                                opacity: 1
                            }
                        ]
                    }
                }
            },
            {
                color:'#fbfbfb',
                label: "Search Engines",
                data: [
                    [3, 14], [4, 11], [5, 10], [6, 9], [7, 5], [8, 8], [9, 5], [10, 6], [11, 4], [12, 7], [13, 4],
                    [14, 3], [15, 4], [16, 6], [17, 4]
                ],
                lines: {
                    show: true,
                    fill: false,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.3
                            }, {
                                opacity: 0
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }];
         $scope.barChart.options = {
            legend: {
                show: false
            },
            xaxis: {
                tickDecimals: 0,
                color: '#f3f3f3'
            },
            yaxis: {
                min: 0,
                color: '#f3f3f3',
                tickFormatter: function(val, axis) {
                    return "";
                },
            },
            grid: {
                hoverable: true,
                clickable: false,
                borderWidth: 0,
                aboveData: false,
                color: '#fbfbfb'

            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false,
                content: " <b>%x May</b> , <b>%s</b> : <span>%y</span>",
            }
        }
        



    }]);


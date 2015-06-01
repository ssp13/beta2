/**
 * Created by ssp on 25/3/2015.
 */

var sensors = angular.module("sensors.module",['ngMaterial','ui.bootstrap','ngMap']);



sensors.controller("sensorsController",['$scope','sensorsDao','$route', '$routeParams', '$location','$mdDialog','$modal','breadcrumbs',
    function($scope,sensorsDao,$route, $routeParams, $location,$mdDialog,$modal,breadcrumbs){


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

       // $scope.sensors = sensorsDao.getSensors();



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
sensors.controller('sensorDetailsController', ['$scope', '$routeParams','sensorsDao','breadcrumbs','$interval',
    function($scope, $routeParams, sensorsDao,breadcrumbs, $interval) {
        $scope.battLeveL=0;
        var temperatures=[];
        var timeStamps;
        $scope.select="10";
        var param=parseInt($scope.select);
        var first;
        runHighChart();
        $scope.resolved=false;
        var promise,chartName,text;
        console.log($routeParams);
        $scope.sensorId=$routeParams.id;
        switch($routeParams.id){
            case "7": promise= sensorsDao.getPressureValuesDirect(param) ;chartName="Pressure";text="Pressue (kPa)"
                break;
            case "4": promise= sensorsDao.getTempValuesDirect(param);chartName="Temperatures" ;text='Temperature (°C)'
                break;

        }
        function getValues(param) {
            sensorsDao.getBattVolts().then(function (response) {
                $scope.battVolts = response.data.value;
            });
            sensorsDao.getBattLevel().then(function (response) {
                $scope.battLevel = response.data.value;
            });
            promise.then(function (response) {
                $scope.response = response.data;
                $scope.resolved = true;
                temperatures = _.map(response.data.listOfT, function (elem) {
                    return parseFloat(elem.value)
                });
                timeStamps = _.map(_.pluck(response.data.listOfT, "insertedOn").reverse(), function (elem) {
                    return new Date(elem)
                });

                $scope.sensorsTemp = response.data.listOfT;
            }, function error(error) {
                console.log(error);
            });
        }



        function getTempValuesDirect(param){
            sensorsDao.getBattVolts().then(function(response){
                $scope.battVolts=response.data.value;
            });
            sensorsDao.getBattLevel().then(function(response){
                $scope.battLevel=response.data.value;
            });
            sensorsDao.getTempValuesDirect(param).then(function(response){
                $scope.response=response.data;
                $scope.resolved=true;
                temperatures=_.map(response.data.listOfT,function(elem){
                    return parseFloat(elem.value)
                });
                timeStamps= _.map(_.pluck(response.data.listOfT,"insertedOn").reverse(),function(elem){
                    return new Date(elem)
                });

                $scope.sensorsTemp=response.data.listOfT;

            },function error(error){
                console.log(error);
            });
        }
        $scope.$watch('response',function(nV,oV){
            if(nV!=oV){
                runHighChart();
            }
        },true);

        getValues(param);
        var intr=$interval(function() {
            getValues(param);
        }, 30000);

        $scope.$on('$destroy',function(){
            $interval.cancel(intr);
        })

        $scope.breadcrumbs = breadcrumbs;

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
                }
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
                content: " <b>%x May</b> , <b>%s</b> : <span>%y</span>"
            }
        };

        $scope.dataSum = [];
        $scope.timeStamps=[];

        //$scope.$watch('select',function(){
        //    param=parseInt($scope.select);
        //    getTempValuesDirect(param);
        //    runHighChart();
        //});
       
        //$interval(function() {
        //    var prom=sensorsDao.getTempAll();
        //    prom.then(function success(response){
        //        $scope.temperatures=response.data;
        //        $scope.timeStamps.push(response.data.insertedOn);
        //        $scope.dataSum.push( parseFloat(response.data));
        //        runHighChart()
        //    })
        //}, 200000);
       function runHighChart() {
            $('#container').highcharts({
                title: {
                    text: chartName+' Chart',
                    x: -20 //center
                },

                subtitle: {
                    text: 'Source: ID '+$scope.sensorId,
                    x: -20
                },
                xAxis: {
                    categories:  timeStamps
                },
                yAxis: {
                    title: {
                        text: text
                    },
                    plotLines: [{
                        value: 0,
                        width: 0.5,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [ {
                    name: 'Sensor ID 12',
                    data:  temperatures.reverse()
                }]
            });
        };



    }]);


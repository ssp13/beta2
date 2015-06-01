/**
 * Created by ssp on 28/5/2015.
 */
sensors.directive("ifttt",function(){
    return{
        restrict: "A",
        scope:{

        },
        templateUrl:"app/views/sensors/directives/tempDetails.html",
        controller:['$scope',Controller],
        link:Link
    };
    function Controller ($scope){
        $scope.sensors=[{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"}];


    }
    function Link (scope,elem,attrs){
        scope.$watch(attrs.mySlide, function(newValue, oldValue) {

            // This is our logic. If parameter is true slideDown otherwise slideUp.
            // TODO: This should be transformed into css transition or angular animator if IE family supports it
            if (newValue) {
                return element.slideDown();
            } else {
                return element.slideUp();
            }
        });
    }var temperatures=[];
    var timeStamps;
    $scope.select="10";
    var param=parseInt($scope.select);
    function getTempValuesDirect(param){
        sensorsDao.getTempValuesDirect(param).then(function(response){
            console.log(response);
            temperatures=_.map(response.data.listOfT,function(elem){
                return parseFloat(elem.value)
            });
            timeStamps= _.map(_.pluck(response.data.listOfT,"insertedOn").reverse(),function(elem){
                return new Date(elem)
            });
            $scope.sensorsTemp=response.data.listOfT;
            runHighChart();
            console.log(temperatures)
        },function error(error){
            console.log(error);
        });
    }

    getTempValuesDirect(param);
    var intr=$interval(function() {
        getTempValuesDirect(param);
    }, 20000);

    $scope.$on('$destroy',function(){
        $interval.cancel(intr);
    })

    $scope.breadcrumbs = breadcrumbs;

    $scope.dataSum = [];
    $scope.timeStamps=[];

    $scope.$watch('select',function(){
        param=parseInt($scope.select);
        getTempValuesDirect(param);
    })

    $interval(function() {
        var prom=sensorsDao.getTempAll();
        prom.then(function success(response){
            $scope.temperatures=response.data;
            $scope.timeStamps.push(response.data.insertedOn);

            $scope.dataSum.push( parseFloat(response.data));
            runHighChart()
        })
    }, 200000);
    var runHighChart=function () {
        $('#container').highcharts({
            title: {
                text: 'Temperatures Chart 5 min interval',
                x: -20 //center
            },

            subtitle: {
                text: 'Source: Temp sensor Id 12',
                x: -20
            },
            xAxis: {
                categories:  timeStamps
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
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

})

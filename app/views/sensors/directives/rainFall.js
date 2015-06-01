/**
 * Created by ssp on 16/5/2015.
 */
sensors.directive("rainFall",function(){
    return{
        
        templateUrl:"app/views/sensors/directives/rainFall.html",
        controller:['$scope','config','sensorsDao','$interval',Controller],
        link:Link
    };
    function Controller ($scope,config,sensorsDao,$interval){
        $scope.sensor={id:"12",rain:"",insertedOn:null};
        function getRain() {
            var promise = sensorsDao.getPluvio();
            promise.then(function success(resp) {
                $scope.lastMeasurement=resp.data.insertedOn;
                $scope.sensor.rain = resp.data.value;

                //$scope.tempChart.sparkData.push(parseFloat($scope.sensor.rain));
            }, function error(error) {
                console.log(error);
            });
        }

        $scope.simpleChart2danger = {
            sparkData:[0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67],
            sparkOptions: {
            type: "bar",
            barColor: config.primary_colorr,
            width: "150px",
            height: "50px"
            }
        };
        getRain();
        $scope.sumRainFall=[0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67];
       var timer= $interval(function(){
            getRain();
            $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67]);
        },50000);
    
    $scope.rainChart = {
        sparkData:  $scope.sumRainFall,
        sparkOptions: {
            type: "bar",
            lineColor:  config.primary_color,
            width: "150px",
            height: "50px"
            }
        };
        $scope.$on('$destroy',function(){
            $interval.cancel(timer);
        });

    }
    function Link (scope,elem,attrs){

    }
})
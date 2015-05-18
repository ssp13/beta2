/**
 * Created by ssp on 16/5/2015.
 */
sensors.directive("rainFall",function(){
    return{
        
        templateUrl:"app/views/sensors/directives/rainFall.html",
        controller:['$scope','config','sensorsDao',Controller],
        link:Link
    };
    function Controller ($scope,config,sensorsDao){
        $scope.temperatures=[];
        $scope.sensor={id:12,temp:0};

        function getTemp() {
            var promise = sensorsDao.getTemp();
            promise.then(function success(resp) {
                console.log(resp.data)
                $scope.sensor.temp = resp.data.value;
                $scope.temperatures.push(resp.data.value);
                $scope.tempChart.sparkData.push(parseFloat($scope.sensor.temp));

                console.log($scope.temperatures);
            }, function error(error) {
                console.log(error);
            });
        }
        getTemp();


        $scope.$watch(function(){return $scope.temperatures;},function(nV,oV){
            console.log(nV,oV)

                $scope.min= _.min(nV);
                $scope.max= _.max(nV);

        },true)

       var counter=0;
        window.setInterval(function(){
            getTemp()
            counter=counter+4;
            $scope.temperatures.push($scope.sensor.temp+counter)

            $scope.tempChart.sparkData=($scope.temperatures);
            $scope.$apply();
        },1000)

        $scope.rainChart = {
            sparkData:  $scope.temperatures,
            sparkOptions: {
                type: "bar",
                lineColor:  config.primary_color,
                width: "150px",
                height: "50px"
            }
        };


        $scope.gaugeData= {
                maxValue: 3e3,
                animationSpeed: 100,
                val: 12
            }
            $scope.gaugeOptions= {
                lines: 12,
                angle: 0,
                lineWidth: 0.47,
                pointer: {
                    length: 0.6,
                    strokeWidth: 0.03,
                    color: "#555555"
                },
                limitMax: "true",
                colorStart: config.primary_color,
                colorStop: config.primary_color,
                strokeColor: "#F5F5F5",
                generateGradient: !0,
                percentColors: [
                    [0, config.primary_color],
                    [1, config.primary_color]
                ]
            }

    }
    function Link (scope,elem,attrs){

    }
})
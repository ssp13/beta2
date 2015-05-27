/**
 * Created by ssp on 5/4/2015.
 */
/**
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("windWidget",function(){
    return{
        scope:{

        },
        templateUrl:"app/views/sensors/directives/windWidget.html",
        controller:['$scope','config','sensorsDao','$interval',Controller],
        link:Link
    };
    function Controller ($scope,config,sensorsDao,$interval){

        $scope.sensor={id:"12",speed:null,vane:null,airSpeeds:[]};

        $scope.rotate=270;

        var base=270;
        var shift=22.5;
        $scope.$watch(function(){
                return $scope.sensor.vane;
            }, function(nV,oV){
            switch(nV){

                case "N":$scope.rotate=base;
                    break;
                case "NNE":$scope.rotate=base + 22.5;
                    break;
                case "NE":$scope.rotate=base + (2 * shift);
                    break;
                case "ENE":$scope.rotate=base + (3*shift);
                    break;
                case "E":$scope.rotate=360;
                    break;
                case "ESE":$scope.rotate=base + (5*shift);
                    break;
                case "SE":$scope.rotate=$scope.rotate + (6*shift);
                    break;
                case "SSE":$scope.rotate=$scope.rotate + (7*shift);
                    break;
                case "S":$scope.rotate=450;
                    break;
                case "SSW":$scope.rotate=$scope.rotate + (8*shift);
                    break;
                case "SW":$scope.rotate=$scope.rotate +(9*shift);
                    break;
                case "WSW":$scope.rotate=$scope.rotate+ (10*shift);
                    break;
                case "W":$scope.rotate=$scope.rotate+ ((11*shift));
                    break;
                case "WNW":$scope.rotate=$scope.rotate+ (12*shift);
                    break;
                case "WN":$scope.rotate=$scope.rotate+(13*shift);
                    break;
                case "NNW":$scope.rotate=$scope.rotate+ ((14*shift));
                    break;

            }
        });



        function getAir() {
            var promise = sensorsDao.getAir();
            promise.then(function success(resp) {

                $scope.sensor.speed = resp.data.value;
                $scope.lastMeasurement=resp.data.insertedOn;
                $scope.sensor.airSpeeds.push(parseFloat(resp.data.value));
                $scope.simpleChart2danger.sparkData.push(parseFloat($scope.sensor.speed));
                if($scope.sensor.speed>0)$scope.beafort=0;
            }, function error(error) {
                console.log(error);
            });
        }
        function getVane() {
            var promise = sensorsDao.getVane();
            promise.then(function success(resp) {

                $scope.sensor.vane = resp.data.value;
                console.log($scope.sensor.vane);
                $scope.simpleChart2danger.sparkData.push(parseFloat($scope.sensor.vane));
            }, function error(error) {
                console.log(error);
            });
        }

        $scope.simpleChart2danger = {
            sparkData: [],
            sparkOptions: {
                type: "line",

                lineColor: config.primary_color,
                fillColor: config.primary_color,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "250",
                height: "50px"
            }
        };
        getAir();
        getVane();
        $interval(function() {
            getAir();
            getVane();
        }, 500000);


        //$scope.gaugeData= {
        //    maxValue: 3e3,
        //    animationSpeed: 100,
        //    val: 12
        //}
        //$scope.gaugeOptions= {
        //    lines: 12,
        //    angle: 0,
        //    lineWidth: 0.47,
        //    pointer: {
        //        length: 0.6,
        //        strokeWidth: 0.03,
        //        color: "#555555"
        //    },
        //    limitMax: "true",
        //    colorStart: config.primary_color,
        //    colorStop: config.primary_color,
        //    strokeColor: "#F5F5F5",
        //    generateGradient: !0,
        //    percentColors: [
        //        [0, config.primary_color],
        //        [1, config.primary_color]
        //    ]
        //}

    }
    function Link (scope,elem,attrs){

    }
})
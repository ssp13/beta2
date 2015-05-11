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
        controller:['$scope','config',Controller],
        link:Link
    };
    function Controller ($scope,config){
        $scope.sensors={wind:{speed:10,windDirection:"NW"}};
        $scope.simpleChart2danger = {
            sparkData: [24, 25, 21, 27, 23, 27, 24, 2,33, 33, 32, 21,2,12,12,12,34,34],
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
        $scope.change=function(){
            $scope.simpleChart2danger.sparkData=_.shuffle([24, 25, 21, 27, 23, 27, 24, 2,33, 33, 32, 21,2,12,12,12,34,34]);
        }

        window.setInterval(function(){
            $scope.simpleChart2danger.sparkData=_.shuffle([24, 25, 21, 27, 23, 27, 24, 2,33, 33, 32, 21,2,12,12,12,34,34]);
            $scope.$apply();
        },7000)

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
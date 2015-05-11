/**
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("tempWidget",function(){
    return{
        scope:{

        },
        templateUrl:"app/views/sensors/directives/tempWidget.html",
        controller:['$scope','config',Controller],
        link:Link
    };
    function Controller ($scope,config){
        $scope.sensor={id:12,temp:10}
        console.log("loadingSensorList")
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
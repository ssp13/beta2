/**
 * Created by e76956 on 24/3/2015.
 */

sensors.directive("sensorDetails",function(){
    return{
        scope:{

        },
        templateUrl:"app/views/sensors/directives/sensorDetails.html",
        controller:['$scope',Controller],
        link:Link
    };
    function Controller ($scope){
        console.log("sensorDetails");
    }
    function Link (scope,elem,attrs){

    }
})
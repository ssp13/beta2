/**
 * Created by ssp on 25/3/2015.
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
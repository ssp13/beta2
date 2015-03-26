/**
 * Created by ssp on 25/3/2015.
 */

sensors.directive("sensorsList",function(){
    return{
        scope:{

        },
        templateUrl:"app/views/sensors/directives/sensorsList.html",
        controller:['$scope',Controller],
        link:Link
    };
    function Controller ($scope){
     $scope.sensors=[{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"}];

    }
     function Link (scope,elem,attrs){

    }
})
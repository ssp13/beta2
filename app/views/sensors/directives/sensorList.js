/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("sensorList",function(){
    return{
        scope:{

        },
        templateUrl:"app/views/sensors/directives/sensorList.html",
        controller:['$scope',Controller],
        link:Link
    };
    function Controller ($scope){
        $scope.sensors=[{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"},{id:1,name:"weather_1",status:"live"}];
        console.log("loadingSensorList")
    }
    function Link (scope,elem,attrs){

    }
})
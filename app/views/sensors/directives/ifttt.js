/**
 * Created by ssp on 12/4/2015.
 */
sensors.directive("ifttt",function(){
    return{
        restrict: "A",
        scope:{

        },
        templateUrl:"app/views/sensors/directives/ifttt.html",
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
        });    }
})
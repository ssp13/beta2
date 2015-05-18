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
       
    $scope.simpleChart2danger = {
            sparkData: [3, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3],
            sparkOptions: {
            type: "bar",
            barColor: config.primary_colorr,
            width: "150px",
            height: "50px"
        }
    };
        
    
    window.setInterval(function(){
        $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67]); 
        $scope.$apply();
    },100000)
    
    $scope.rainChart = {
        sparkData:  $scope.temperatures,
        sparkOptions: {
            type: "bar",
            lineColor:  config.primary_color,
            width: "150px",
            height: "50px"
            }
        };
    }
    function Link (scope,elem,attrs){

    }
})
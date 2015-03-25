var custom = angular.module("app.custom", []);

custom.directive("sparkDanger",function($timeout){
    return{
        templateUrl:"app/views/charts/directives/sparkDanger.html",
        controller:['$scope','config',function($scope,config){
            
            $scope.simpleChart2danger = {
                sparkData: [3, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3],
                sparkOptions: {
                type: "line",
                barColor: config.danger_color,
                width: "120px",
                height: "50px"
            }
        };
        $scope.change=function(){
        $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3]);       
    }
    
    window.setInterval(function(){
        $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67]); 
        $scope.$apply();
    },1000)
        }]
    };
    
});
custom.directive("zippy",function(){
  return{
    restrict:"E",
    transclude: true,
    scope:{
      title:'@'
    },
    templateUrl:"app/views/charts/directives/zippy.html",
      link:function(scope,element,attrs){
        
      scope.toggleContent = function(){
        scope.isCollapsed = !scope.isCollapsed;
       if(scope.isCollapsed)
           element.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
       else  element.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
      };
      }
  };
});
custom.directive("zippy-light",function(){
    return{
        restrict:"E",
        transclude: true,
        scope:{
            title:'@'
        },
        templateUrl:"app/views/charts/directives/zippyLight.html",
        link:function(scope,element,attrs){

            scope.toggleContent = function(){
                scope.isCollapsed = !scope.isCollapsed;
                if(scope.isCollapsed)
                    element.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
                else  element.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            };
        }
    };
});







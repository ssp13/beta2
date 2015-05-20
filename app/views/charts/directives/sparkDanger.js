var custom = angular.module("app.custom", ['ngMaterial','ui.bootstrap']);

custom.directive("sparkDanger",function($timeout){
    return{
        templateUrl:"app/views/charts/directives/sparkDanger.html",
        controller:['$scope','config',function($scope,config){
            
            $scope.simpleChart2danger = {
                sparkData: [3, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3],
                sparkOptions: {
                type: "bar",
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
custom.directive("zippy",function($mdDialog,$modal){
  return{
    restrict:"E",
    transclude: true,
    scope:{
      title:'@',
      link:'@'
    },
    templateUrl:"app/views/charts/directives/zippy.html",
      link:function(scope,element,attrs){
          if(scope.link==="map"){
              $(".fa-bars").remove();
          }
          scope.visible=true;
      scope.toggleContent = function(){
          console.log("sad");
        scope.isCollapsed = !scope.isCollapsed;
       if(scope.isCollapsed)
           element.find('.expand').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
       else  element.find('.expand').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
      };
          scope.showAdvanced = function(ev) {
              $mdDialog.show({
                  controller: DialogController,
                  templateUrl: 'app/views/charts/directives/dialog1.tmpl.html',
                  targetEvent: ev
              })
                  .then(function(answer) {
                      scope.alert = 'You said the information was "' + answer + '".';
                  }, function() {
                      scope.alert = 'You cancelled the dialog.';
                  });
          };
          scope.open = function (size) {

              var modalInstance = $modal.open({
                  templateUrl: 'myModalContent.html',
                  controller: 'ModalInstanceCtrl',
                  size: size,
                  resolve: {
                      items: function () {
                          return $scope.items;
                      }
                  }
              });

              modalInstance.result.then(function (selectedItem) {
                  scope.selected = selectedItem;
              }, function () {

              });
          };
          function DialogController($scope, $mdDialog) {
              $scope.hide = function () {
                  $mdDialog.hide();
              };
              $scope.cancel = function () {
                  $mdDialog.cancel();
              };
              $scope.answer = function (answer) {
                  $mdDialog.hide(answer);
              };
          }
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







/**
 * Created by e76956 on 23/3/2015.
 */
angular.module("app.custom").directive("sparkTest",['fireSvc','loggit','$modal',function(fireSvc,loggit,$modal){
    return{
        scope:{
        },

        templateUrl:"app/views/charts/directives/sparkTest.html",
        controller:['$scope','config',function($scope,config){
            console.log("spark")
            loggit.log("sdsd")
            $scope.isCollapsed=false;
            $scope.coll = function (){

            }

            $scope.open = function (size) {

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
                    $scope.selected = selectedItem;
                }, function () {

                });
            };

            $scope.spark="hello";

            $scope.simpleChart2danger = {
                sparkData: [3, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3],
                sparkOptions: {
                    type: "line",
                    barColor: config.danger_color,
                    width: "120px",
                    height: "50px"
                }
            };
            window.setInterval(function(){
                $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67]);
                $scope.$apply();
            },1000)
            var prom= fireSvc.getData();
            prom.success(function(data){
                console.log(data);
            })
        }],
        link:function(scope,elem){
            scope.$watch('isCollapsed',function(nV,oV){
                if(nV!=oV){
                    if(nV)elem.find('#slide').slideUp();
                    else elem.find('#slide').slideDown();
                }
            })
        }
    };

}]);


custom.factory('fireSvc',["$http",function($http){



        //promise.success(function(data, status, headers, config) {
        //    console.log(data)
        //    // this callback will be called asynchronously
        //    // when the response is available
        //}).
        //error(function(data, status, headers, config) {
        //    // called asynchronously if an error occurs
        //    // or server returns response with an error status.
        //});

    return{
        getData:function(){
            var promise = $http.get('https://cross.firebaseio.com/posts.json');
            return promise;
        }
    }
}])


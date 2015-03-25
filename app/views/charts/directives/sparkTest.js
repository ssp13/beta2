/**
 * Created by e76956 on 23/3/2015.
 */
angular.module("app.custom").directive("sparkTest",['fireSvc','loggit',function(fireSvc,loggit){
    return{
        templateUrl:"app/views/charts/directives/sparkTest.html",
        controller:['$scope','config',function($scope,config){
            console.log("spark")
            loggit.log("sdsd");
            $scope.isCollapsed=false;
            $scope.coll = function (){

            }

            $scope.$watch('isCollapsed',function(nV,oV){
                if(nV!=oV){
                    if(nV)$('#slide').slideUp();
                    else $('#slide').slideDown();
                }
            })
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
            $scope.change=function(){
                $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3]);
            }

            window.setInterval(function(){
                $scope.simpleChart2danger.sparkData=_.shuffle([0, 1, 2, 3, 5, 3, 4, 2,3, 1, 2, 3,67]);
                $scope.$apply();
            },1000)
            $.ajax('https://cross.firebaseio.com/posts.json',
                {
                    dataType: "jsonp",
                    type: "GET",
                    success: function(data) { console.log(data); },
                    error: function(request, textStatus, errorThrown) { console.log("error " + textStatus + ": " + errorThrown);}
                });
            //prom.success(function(data){
            //    console.log(data);
            //})
        }]
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

            //var promise = $http.get('https://cross.firebaseio.com/posts.json');
            return data;
        }
    }
}])


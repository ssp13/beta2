/**
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("luminosityWidget", function() {
    return {
        scope:{

        },
        templateUrl: "app/views/sensors/directives/luminosity.html",
        controller: ['$scope', 'config', 'sensorsDao', Controller],
        link: Link
    };

    function Controller($scope, config, sensorsDao ,$interval) {
        //function getHumidity() {
        //    var promise = sensorsDao.getHumidity();
        //    promise.then(function success(resp) {
        //        $scope.sensor = resp.data;
        //        $scope.tempChart.sparkData.push(parseFloat($scope.sensor.value));
        //    }, function error(error) {
        //        console.log(error);
        //    });
        //}
        //getHumidity();
        //var timer =$interval(function() {
        //    getHumidity();
        //}, 20000);
        //
        //$scope.$on('$destroy',function(){
        //    $interval.cancel(timer);
        //});
    }

    function Link(scope, elem, attrs) {

    }
})
/**
 * Created by ssp on 31/5/2015.
 */
/**
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("pressureWidget", function() {
    return {
        scope:{

        },
        templateUrl: "app/views/sensors/directives/pressureWidget.html",
        controller: ['$scope', 'config', 'sensorsDao','$interval' ,Controller],
        link: Link
    };

    function Controller($scope, config, sensorsDao,$interval) {

        $scope.simpleChart = {
            sparkData: [0],
            sparkOptions: {
                type: "line",
                barColor: config.danger_color,
                width: "120px",
                height: "50px"
            }
        };
        function getPressure() {
            var promise = sensorsDao.getPressure();
            promise.then(function success(resp) {
                $scope.sensor = resp.data;
                $scope.simpleChart.sparkData.push(parseFloat($scope.sensor.value));
            }, function error(error) {
                console.log(error);
            });
        }
        getPressure();
        var timer =$interval(function() {
            getPressure();
        }, 20000);

        $scope.$on('$destroy',function(){
            $interval.cancel(timer);
        });
    }

    function Link(scope, elem, attrs) {

    }
})
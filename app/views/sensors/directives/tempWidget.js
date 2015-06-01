/**
 *
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("tempWidget", function() {
	return {
        scope:{
        },
		templateUrl: "app/views/sensors/directives/tempWidget.html",
		controller: ['$scope', 'config', 'sensorsDao','$interval', Controller],
		link: Link
	};
	function Controller($scope, config, sensorsDao,$interval) {
       // $scope.sensor={temp:0};
        $scope.simpleChartTemp = {
            sparkData: [0],
            sparkOptions: {
                type: "line",
                barColor: config.danger_color,
                width: "120px",
                height: "50px"
            }
        };
		$scope.sensor = {};
        var last;
		function getTemp() {
			var promise = sensorsDao.getTemp();
			promise.then(function success(resp) {
                $scope.sensor=resp.data;
                $scope.lastMeasurement=resp.data.insertedOn;
                $scope.sensor.temp = resp.data.value;
                sensorsDao.setSensorTest(resp.data);
                last=resp.data.insertedOn;

			}, function error(error) {
				console.log(error);
			});
		}
        getTemp();
		var timer =$interval(function() {
			getTemp();
		}, 20000);

        $scope.$on('$destroy',function(){
            $interval.cancel(timer);
        });

        $scope.$watch('sensor',function(nV,oV){

            if(nV!=oV)$scope.simpleChartTemp.sparkData.push(parseFloat($scope.sensor.temp));

        },true)

	}
	function Link(scope, elem, attrs) {

	}
})
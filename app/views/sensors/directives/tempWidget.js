/**
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
        $scope.temperatures = [0];
		$scope.sensor = {
			id: 12,
			temp: null
		};
        var last;
        $scope.sensorTest=[];
		function getTemp() {
			var promise = sensorsDao.getTemp();
			promise.then(function success(resp) {

                $scope.sensorTest.push(resp.data);

                $scope.lastMeasurement=resp.data.insertedOn;
				$scope.sensor.temp = resp.data.value;

                if(resp.data.insertedOn!=last){
                    $scope.temperatures.push(parseFloat(resp.data.value));
                    sensorsDao.setSensorTest( $scope.sensorTest);
                }
                last=resp.data.insertedOn;
				$scope.tempChart.sparkData.push(parseFloat($scope.sensor.temp));
			}, function error(error) {
				console.log(error);
			});
		}


        getTemp();
		//$scope.$watch(function() {
		//	return $scope.temperatures;
		//}, function(nV, oV) {
		//	$scope.min = _.min(nV);
		//	$scope.max = _.max(nV);
        //
		//}, true);

		var counter = 0;

		$interval(function() {
			getTemp();

		}, 2000);

		$scope.tempChart = {
			sparkData: $scope.temperatures,
			sparkOptions: {
				type: "line",
				lineColor: config.primary_color,
				width: "100px",
				height: "50px"

			}
		};


		$scope.gaugeData = {
			maxValue: 3e3,
			animationSpeed: 100,
			val: 12
		}
		$scope.gaugeOptions = {
			lines: 12,
			angle: 0,
			lineWidth: 0.47,
			pointer: {
				length: 0.6,
				strokeWidth: 0.03,
				color: "#555555"
			},
			limitMax: "true",
			colorStart: config.primary_color,
			colorStop: config.primary_color,
			strokeColor: "#F5F5F5",
			generateGradient: !0,
			percentColors: [
				[0, config.primary_color],
				[1, config.primary_color]
			]
		}

	}

	function Link(scope, elem, attrs) {

	}
})
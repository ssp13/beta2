/**
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("soilMoisture", function() {
	return {
        scope:{

        },
		templateUrl: "app/views/sensors/directives/soilMoisture.html",
		controller: ['$scope', 'config', 'sensorsDao', Controller],
		link: Link
	};

	function Controller($scope, config, sensorsDao) {
		$scope.temperatures = [];
		$scope.sensor = {
			id: 12,
			temp: 0
		};

		function getTemp() {
			var promise = sensorsDao.getTemp();
			promise.then(function success(resp) {
				console.log(resp.data)
				$scope.sensor.temp = resp.data.value;
				$scope.temperatures.push(resp.data.value);
				$scope.tempChart.sparkData.push(parseFloat($scope.sensor.temp));
			}, function error(error) {
				console.log(error);
			});
		}


        $scope.simpleChartlong = {
            sparkData: [1, 3, 2, 5, 4, 2, 1, 7, 1, 8, 4, 3, 5, 2, 4, 5, 1, 7, 1, 8],
            sparkOptions: {
                type: "bar",
                barColor: config.primary_color,
                width: "250px",
                height: "60px"
            }
        }
		$scope.$watch(function() {
			return $scope.temperatures;
		}, function(nV, oV) {
			$scope.min = _.min(nV);
			$scope.max = _.max(nV);

		}, true)

		var counter = 0;
		window.setInterval(function() {
			getTemp()
			counter = counter + 4;
			$scope.temperatures.push($scope.sensor.temp + counter)

			$scope.tempChart.sparkData = ($scope.temperatures);
			$scope.$apply();
		}, 200000)

		$scope.tempChart = {
			sparkData: [3, 1, 2, 3, 5, 3, 4, 2, 3, 1, 2, 3],
			sparkOptions: {
				type: "line",
				lineColor: config.primary_color,
				width: "150px",
				height: "80px"
			}
		};

		getTemp();
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
/**
 * Created by e76956 on 27/3/2015.
 */
/**
 * Created by e76956 on 24/3/2015.
 */
sensors.directive("humidityWidget", function() {
	return {
        scope:{

        },
		templateUrl: "app/views/sensors/directives/humidityWidget.html",
		controller: ['$scope', 'config', 'sensorsDao','$interval', Controller],
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
        function getHumidity() {
            var promise = sensorsDao.getHumidity();
            promise.then(function success(resp) {
                $scope.sensor = resp.data;
               //$scope.tempChart.sparkData.push(parseFloat($scope.sensor.value));
            }, function error(error) {
                console.log(error);
            });
        }
        getHumidity();
        var timer =$interval(function() {
            getHumidity();
        }, 50000);
        sensorsDao.getHumidityValuesDirect(288).then(function(resp){
            var x =_.map(resp.data.listOfT,function (elem){ return parseFloat(elem.value)});

            $scope.min=_.min(x);
            $scope.max=_.max(x);
        });
        $scope.$on('$destroy',function(){
            $interval.cancel(timer);
        });
	}

	function Link(scope, elem, attrs) {

	}
})
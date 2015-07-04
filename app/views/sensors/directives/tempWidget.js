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
                chartRangeMin:[-20],
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
                $scope.resolved=true;
                sensorsDao.setSensorTest(resp.data);
                last=resp.data.insertedOn;

			}, function error(error) {
				console.log(error);
			});
		}
        getTemp();

        $scope.$on('$destroy',function(){
            $interval.cancel(timer);
        });
        $scope.$watch('sensor',function(nV,oV){

            if(nV!=oV && $scope.resolved){
                console.log(nV)
                $scope.sensor.temp && $scope.simpleChartTemp.sparkData.push(parseFloat($scope.sensor.temp));
            }
        });
        sensorsDao.getTempValuesDirect(288).then(function(resp){
            var x =_.map(resp.data.listOfT,function (elem){ return parseFloat(elem.value)});

            $scope.min=_.min(x);
            $scope.max=_.max(x);
        });
        sensorsDao.getTempValuesDirect(1000).then(function(resp){
            var x =_.map(resp.data.listOfT,function (elem){ return parseFloat(elem.value)});
            var s=(x[0]-x[x.length-1])/x[x.length-1];
            console.log(x);
            $scope.change=s*100;
        });
        var timer =$interval(function() {
            getTemp();
        }, 50000);
	}
	function Link(scope, elem, attrs) {

	}
})
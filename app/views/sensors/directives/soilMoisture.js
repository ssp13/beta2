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

	}

	function Link(scope, elem, attrs) {

	}
})
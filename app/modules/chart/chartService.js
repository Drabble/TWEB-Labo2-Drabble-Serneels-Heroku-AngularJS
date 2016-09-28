(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:chartService
	 * @description
	 * # chartService
	 * Service of the app
	 */

  	angular
		.module('chart')
		.factory('ChartService', Chart);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Chart.$inject = ['$http'];

		function Chart ($http) {

		}

})();

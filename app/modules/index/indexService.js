(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:indexService
	 * @description
	 * # indexService
	 * Service of the app
	 */

  	angular
		.module('index')
		.factory('IndexService', Index);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Index.$inject = ['$http'];

		function Index ($http) {

		}

})();

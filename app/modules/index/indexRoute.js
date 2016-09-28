'use strict';

/**
 * @ngdoc function
 * @name app.route:indexRoute
 * @description
 * # indexRoute
 * Route of the app
 */

angular.module('index')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('index', {
				url:'/index',
				templateUrl: 'app/modules/index/index.html',
				controller: 'IndexCtrl',
				controllerAs: 'vm'
			});
		
	}]);

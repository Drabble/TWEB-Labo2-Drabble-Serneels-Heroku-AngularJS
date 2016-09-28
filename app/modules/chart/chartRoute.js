'use strict';

/**
 * @ngdoc function
 * @name app.route:chartRoute
 * @description
 * # chartRoute
 * Route of the app
 */

angular.module('chart')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('chart', {
				url:'/chart',
				templateUrl: 'app/modules/chart/chart.html',
				controller: 'ChartCtrl',
				controllerAs: 'vm'
			});
		
	}]);

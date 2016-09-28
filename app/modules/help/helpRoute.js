'use strict';

/**
 * @ngdoc function
 * @name app.route:helpRoute
 * @description
 * # helpRoute
 * Route of the app
 */

angular.module('help')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('help', {
				url:'/help',
				templateUrl: 'app/modules/help/help.html',
				controller: 'HelpCtrl',
				controllerAs: 'vm'
			});
		
	}]);

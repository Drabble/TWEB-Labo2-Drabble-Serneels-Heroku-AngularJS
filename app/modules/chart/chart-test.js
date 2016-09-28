(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:chartTest
	 * @description
	 * # chartTest
	 * Test of the app
	 */

	describe('chart test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('tweb-labo2-drabble-serneels-heroku-angularjs');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ChartCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

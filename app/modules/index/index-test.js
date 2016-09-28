(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:indexTest
	 * @description
	 * # indexTest
	 * Test of the app
	 */

	describe('index test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('tweb-labo2-drabble-serneels-heroku-angularjs');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('IndexCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

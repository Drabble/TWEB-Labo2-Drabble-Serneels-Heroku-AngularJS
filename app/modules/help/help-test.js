(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:helpTest
	 * @description
	 * # helpTest
	 * Test of the app
	 */

	describe('help test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('tweb-labo2-drabble-serneels-heroku-angularjs');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('HelpCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

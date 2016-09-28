(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:chartCtrl
	* @description
	* # chartCtrl
	* Controller of the app
	*/

  	angular
		.module('chart')
		.controller('ChartCtrl', Chart);

		Chart.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Chart() {
			/*jshint validthis: true */
			var vm = this;
			
			vm.data = [25,43,72,99];
			vm.labels = ["One", "Two", "Tree", "Four"];
		}

})();

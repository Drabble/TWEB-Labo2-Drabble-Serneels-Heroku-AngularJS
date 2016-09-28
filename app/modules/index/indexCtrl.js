(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:indexCtrl
	* @description
	* # indexCtrl
	* Controller of the app
	*/

  	angular
		.module('index')
		.controller('IndexCtrl', Index);

		Index.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Index() {
			/*jshint validthis: true */
			var vm = this;

			vm.title = "Github explorer";
			vm.author = "Antoine Drabble & Guillaume Serneels";
		}

})();

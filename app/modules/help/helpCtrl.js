(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:helpCtrl
	* @description
	* # helpCtrl
	* Controller of the app
	*/

  	angular
		.module('help')
		.controller('HelpCtrl', Help);

		Help.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Help() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

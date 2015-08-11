export default (ngModule) => {
	ngModule.config(($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl as home'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		});
	});
};
	
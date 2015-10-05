var app = angular.module('krissy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '',
      controller: 'homeCtrl'
    })

    .state('products', {
      url: '/products',
      templateUrl: 'app/products/templates/productsTmpl.html',
      controller: 'productsCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'app/about/templates/aboutTmpl.html',
      controller: 'aboutCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/templates/contactTmpl.html',
      controller: 'contactCtrl'
    })

});

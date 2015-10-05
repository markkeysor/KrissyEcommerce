Parse.initialize("ao6B2tpslDU3YPenUsg9W2A5TZEQWRBKUs88Heva", "PgLtI13ZIE7hNTyoxICj6Iljqxt7QK9trLWeGs1l");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
alert("yay! it worked");
});
var app = angular.module('krissy', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/templates/homeTmpl.html',
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

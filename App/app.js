/**
 * Created by XPHLR on 2017/10/18.
 */

var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("shop", {
            url: "/shop",
            templateUrl: "App/View/shop.html",
            controller: "shopController"
        });
    $urlRouterProvider.otherwise("/shop");
});

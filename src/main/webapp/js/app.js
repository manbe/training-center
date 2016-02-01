/**
 * Created by illcko on 10.01.16.
 */
var app=angular.module('trainingCenter', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enable:true,
        requireBase:false
    });
    $routeProvider
        .when('/training', {
            title: 'trainings',
            templateUrl: '/pages/trainings.html',
            controller: 'TrainingsController as trCtrl',
            reloadOnSearch: false,
            loadData: 'FINISHED'
        })
        .when('/coach', {
            title: 'coaches',
            templateUrl: '/pages/coaches.html',
            controller: 'CoachesController as coCtrl',
            reloadOnSearch: false,
            loadData: 'FINISHED'
        });
});
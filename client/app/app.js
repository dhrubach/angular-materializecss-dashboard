/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular.module('materialDashboard.directives', []);
    angular.module('materialDashboard', ['ui.router', 'materialDashboard.directives']);

    angular
        .module('materialDashboard')
        .config(function($stateProvider) {
            $stateProvider
                .state('main.teams', {
                    'templateUrl': 'teams/teams.html',
                    'controller': 'TeamsController',
                    'controllerAs': 'vm',
                    url: 'teams'
                })
                .state('main.table', {
                    'templateUrl': 'league-table/league-table.html'
                });
        });

})();
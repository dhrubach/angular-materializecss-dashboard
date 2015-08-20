/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular.module('materialDashboard.directives', []);
    angular.module('materialDashboard', ['ui.router', 'materialDashboard.directives']);

    angular
        .module('materialDashboard')
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    'abstract': true,
                    'url': '',
                    'template': '<ui-view />'
                })
                .state('main.teams', {
                    'url': 'teams',
                    'templateUrl': 'app/teams/teams.card.html',
                    'controller': 'TeamsController',
                    'controllerAs': 'vm'
                })
                .state('main.table', {
                    'url': 'table',
                    'templateUrl': 'app/league-table/league-table.html'
                });
        });
})();
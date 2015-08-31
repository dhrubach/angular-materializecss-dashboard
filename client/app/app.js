/**
 * Created by Dhruba on 29-Jul-15.
 */
(function () {
    'use strict';

    angular.module('materialDashboard.directives', []);
    angular.module('materialDashboard', ['ui.router', 'ct.ui.router.extras', 'materialDashboard.directives']);

    angular
        .module('materialDashboard')
        .config(function ($stateProvider, $stickyStateProvider, $urlRouterProvider) {

            $stateProvider
                .state('main', {
                    'url': '/',
                    'templateUrl': 'app/tabs-section/tabs.content.html',
                    'controller': 'TabsController',
                    'controllerAs': 'tbc',
                    'deepStateRedirect': {
                        'default' : {
                            'state': 'main.teams'
                        }
                    }
                })
                .state('main.teams', {
                    'url': 'teams',
                    'sticky': true,
                    'views': {
                        'teams': {
                            'templateUrl': 'app/teams/teams.card.html',
                            'controller': 'TeamsController',
                            'controllerAs': 'tmc'
                        }
                    }
                })
                .state('main.tables', {
                    'url': 'league-tables',
                    'sticky': true,
                    'views': {
                        'tables': {
                            'templateUrl': 'app/league-table/league-table.html',
                            'controller': 'LeagueTableController',
                            'controllerAs': 'ltc'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        })
        .run(function ($rootScope, $urlRouter) {
            $rootScope.$on('$locationChangeSuccess', function(event) {
                $urlRouter.sync();
            });
        });
})();

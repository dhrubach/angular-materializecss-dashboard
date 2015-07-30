/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('materialDashboard')
        .factory('TeamsService', TeamsService);

    TeamsService.$inject = ['$timeout', '$q'];

    function TeamsService($timeout, $q) {
        var service = {
            getEPLTeams: getEPLTeams
        };

        return service;

        function getEPLTeams() {
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(generateEPLTeams());
            }, 1000);

            return deferred;
        }

        function generateEPLTeams() {
            return [
                {
                    'id': 'manu',
                    'name': 'Manchester United',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                },
                {
                    'id': 'manc',
                    'name': 'Manchester City',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                },
                {
                    'id': 'chel',
                    'name': 'Chelsea',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                },
                {
                    'id': 'arsn',
                    'name': 'Arsenal',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                },
                {
                    'id': 'livp',
                    'name': 'Liverpool',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                },
                {
                    'id': 'evrt',
                    'name': 'Everton',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                },
                {
                    'id': 'soth',
                    'name': 'Southampton',
                    'logo': 'assets/images/Manchester-United-Logo.jpg',
                    'form': 'P10 W5 D3 L2',
                    'futureOpponent': 'Sunderland',
                    'gameDate': '08.08.2015'
                }
            ];
        }
    }
})();
/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('materialDashboard')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['TeamsService', '$state'];

    function TeamsController(TeamsService, $state) {
        var tmc = this;

        tmc.eplTeams = [];
        tmc.currentTabState = $state.current.name;

        activate();

        function activate() {
            TeamsService
                .getEPLTeams()
                .then(function (data) {
                    if (data && angular.isArray(data)) {
                        tmc.eplTeams.push(data);
                    }
                })
                .catch(function (reason) {
                    console.log(reason);
                });
        }
    }
})();

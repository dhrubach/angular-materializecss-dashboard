/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('materialDashboard')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['TeamsService'];

    function TeamsController(TeamsService) {
        var vm = this;
        vm.eplTeams = [];

        activate();

        function activate() {
            TeamsService
                .getEPLTeams()
                .then(function (data) {
                    if (data && angular.isArray(data)) {
                        vm.eplTeams.push(data);
                    }
                }, function (reason) {
                    console.log(reason);
                });
        }
    }
})();
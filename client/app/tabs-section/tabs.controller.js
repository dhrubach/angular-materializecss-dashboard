/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('materialDashboard')
        .controller('TabsController', TabsController);

    TabsController.$inject = [];

    function TabsController() {
        var tbc = this;
        tbc.tabs = [];

        //console.log('inside TabsController...');

        activate();

        function activate() {
            initTabs();
        }

        function initTabs() {
            tbc.tabs = [
                {
                    'id': '1',
                    'state': 'main.teams',
                    'title': 'Teams'
                },
                {
                    'id': '2',
                    'state': 'main.tables',
                    'title': 'League Tables'
                },
                {
                    'id': '3',
                    'state': 'main.news',
                    'title': 'News'
                },
                {
                    'id': '4',
                    'state': 'main.schedule',
                    'title': 'schedule'
                }
            ];
        }

    }
})();

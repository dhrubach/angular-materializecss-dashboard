/**
 * Created by Dhruba on 29-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('materialDashboard')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state'];

    function HeaderController($state) {
        var vm = this;
        vm.tabs = [];
        vm.tabClick = tabClick;
        vm.activeTab = '';
        vm.isReady = false;

        activate();

        function activate() {
            initTabs();
            activateTab(vm.tabs[0]);
        }

        function initTabs() {
            vm.tabs = [
                {
                    'id': '1',
                    'state': 'main.teams',
                    'title': 'Teams'
                },
                {
                    'id': '2',
                    'state': 'main.table',
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
            vm.isReady = true;
            $('ul.tabs').tabs();
        }

        function tabClick(state) {
            var selectedTab = vm.tabs.filter(function(tab) {
                return tab.state === state;
            });

            activateTab(selectedTab);

            $state.go(selectedTab[0].state);
        }

        function activateTab(tab) {
            vm.activeTab = angular.isArray(tab)
                ? tab[0].id
                : tab.id;
        }
    }
})();
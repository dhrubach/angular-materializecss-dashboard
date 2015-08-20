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
        }

        function tabClick(state) {
            var selectedTab = vm.tabs.filter(function(tab) {
                return tab.state === state;
            });

            activateTab(selectedTab);

            console.log($state.get());

/*
            $state.go(selectedTab[0].state).then(function(data) {
                console.log(data);
            }, function(reason) {
                console.log(reason);
            });
*/
        }

        function activateTab(tab) {
            vm.activeTab = angular.isArray(tab)
                ? tab[0].id
                : tab.id;
        }
    }
})();
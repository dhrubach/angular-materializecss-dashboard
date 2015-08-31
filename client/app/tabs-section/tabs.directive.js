/**
 * Created by Dhruba on 30-Jul-15.
 */
(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name tabListRenderComplete
     * @module materialDashboard.directives
     *
     * @restrict E
     *
     * @description
     *
     * Using MaterializeCSS 'Tabs' component with ngRepeat directive
     * will not generate expected results. This is due to MaterializeCSS
     * initializing the component via jQuery prior to DOM compilation
     * by Angular $compile service.
     *
     * This directive waits for the last of the ngRepeat list items to be
     * compiled by angular before initializing the component.
     *
     * @usage
     *
     * <ul>
     *     <li class="tab col s3" ng-repeat="item in vm.collections" tab-list-render-complete>
     *         <a class="active">Tab Title</a>
     *     </li>
     * </ul>
     */
    angular
        .module('materialDashboard.directives')
        .directive('tabListRenderComplete', TabListRenderComplete);

    function TabListRenderComplete() {
        var config = {
            restrict: 'A',
            link: link
        };

        return config;

        function link(scope, elem, attr) {
            // tab-list-render-complete should only be used in conjunction with ng-repeat
            // if not a repeat list element, then follow MaterializeCSS 'Tabs' documentation
            var isRepeat = Object.keys(attr).indexOf('ngRepeat') !== -1;

            // if current element is a repeat element and is the last one to be rendered
            if(isRepeat && scope.$last) {
                // insert 'tabs' class to parent <ul> element if none exists
                if(!elem.parent().hasClass('tabs')) {
                    elem.parent().addClass('tabs');
                }

                //console.log('initializing directive...');

                // initialize 'tabs' component
                elem.parent().tabs();
            }
        }
    }
})();

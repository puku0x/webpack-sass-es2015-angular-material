import angular    from 'angular';
import uiRouter   from 'angular-ui-router';
import ngMaterial from 'angular-material';

import sideMenuComponent from './side-menu.component';

let module = angular.module('side-menu', [
        uiRouter,
        ngMaterial
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
    })
    .component('sideMenu', sideMenuComponent)
    .name;

export default module;

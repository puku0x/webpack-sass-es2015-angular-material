import angular    from 'angular';
import uiRouter   from 'angular-ui-router';
import ngMaterial from 'angular-material';

import topBarComponent from './top-bar.component';

let module = angular.module('topBar', [
        uiRouter,
        ngMaterial,
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        // $urlRouterProvider.otherwise('/');
        //
        // $stateProvider
        //     .state('home', {
        //         url: '/',
        //         component: 'top-bar'
        //     });
    })
    .component('topBar', topBarComponent)
    .name;

export default module;

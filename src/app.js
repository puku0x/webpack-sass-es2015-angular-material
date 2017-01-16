// 依存パッケージ
import angular    from 'angular';
import uiRouter   from 'angular-ui-router';
import ngAnimate  from 'angular-animate';
import ngAria     from 'angular-aria';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

// CSS
import 'angular-material/angular-material.css'
import './app.scss';

// コンポーネント
import components from './components/components';
import appComponent from './app.component';

angular
  .module('app', [
      uiRouter,
      ngAnimate,
      ngAria,
      ngMessages,
      ngMaterial,
      components
  ])
  .config(($locationProvider) => {
      'ngInject';
      $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', appComponent);
  //.service('MainService', MainService)
  //.controller('MainController', MainController);

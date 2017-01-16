import angular  from 'angular';
import home     from './home/home';
import topBar   from './top-bar/top-bar';
import sideMenu from './side-menu/side-menu';
// import About from './about/about';

let component = angular.module('app.components', [
    home,
    topBar,
    sideMenu
]).name;

export default component;

// コントローラ
class controller {

    constructor($mdSidenav) {
        'ngInject';
        this.title = 'nav';
        this.$mdSidenav = $mdSidenav;
    }

    openSideMenu() {
        this.$mdSidenav('left').toggle();
    }
}

export default controller;

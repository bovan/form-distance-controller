var bovan = bovan || {};

bovan.formDistanceController = function (container) {
    this.container = container;
};

bovan.formDistanceController.prototype.init = function () {
    var hh = document.createElement('input');
    hh.id = this.container.id + '_hh';
    var mm = document.createElement('input');
    mm.id = this.container.id + '_mm';
    var ss = document.createElement('input');
    ss.id = this.container.id + '_ss';

    this.container.appendChild(hh);
    this.container.appendChild(mm);
    this.container.appendChild(ss);
};
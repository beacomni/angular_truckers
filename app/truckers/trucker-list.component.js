"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var trucker_detail_component_1 = require('./trucker-detail.component');
var trucker_service_1 = require('./trucker.service');
//The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
var TruckerListComponent = (function () {
    //truckerService = new TruckerService(); // don't do this. Instead:
    function TruckerListComponent(_truckerService) {
        this._truckerService = _truckerService;
    }
    TruckerListComponent.prototype.onSelect = function (trucker) {
        //this.selectedTrucker = trucker;
    };
    TruckerListComponent.prototype.getTruckers = function () {
        var _this = this;
        this._truckerService.getTruckers().then(function (t) { return _this.truckers = t; });
    };
    TruckerListComponent.prototype.ngOnInit = function () {
        this.getTruckers();
    };
    TruckerListComponent = __decorate([
        core_1.Component({
            directives: [trucker_detail_component_1.TruckerDetailComponent],
            selector: 'trucker-convoy',
            template: "\n\t<ul class=\"truckers\">\n\t<li *ngFor=\"#trucker of truckers\" \n\t(click)=\"onSelect(trucker)\" \n\t[class.selected]=\"trucker===selectedTrucker\">\n\t<span class=\"badge\">{{trucker.id}}</span> {{trucker.handle}}\n\t</li>\n\t</ul>\n\t<my-trucker-detail [trucker]=\"selectedTrucker\"></my-trucker-detail>\n\t",
            providers: [trucker_service_1.TruckerService],
            styles: ["\n\t.selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t}\n\t.truckers {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 15em;\n\t}\n\t.truckers li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em 0;\n\t\theight: 1.6em;\n\t\tborder-radius: 4px;\n\t}\n\t.truckers li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n\t}\n\t.truckers li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n\t\tleft: .1em;\n\t}\n\t.truckers .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n\t}\n\t.truckers .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius: 4px 0 0 4px;\n\t}\n\t"],
        }), 
        __metadata('design:paramtypes', [trucker_service_1.TruckerService])
    ], TruckerListComponent);
    return TruckerListComponent;
}());
exports.TruckerListComponent = TruckerListComponent;
//# sourceMappingURL=trucker-list.component.js.map
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
var Trucker_1 = require('./Trucker');
var router_deprecated_1 = require('@angular/router-deprecated');
var trucker_service_1 = require('./trucker.service');
//parent app component will tell this component which Trucker to display
var TruckerDetailComponent = (function () {
    //The router extracts the route parameter (id:) from the URL and supplies it to the TruckerDetailComponent via the RouteParams service
    function TruckerDetailComponent(_router, _routeParams, _truckerService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._truckerService = _truckerService;
    }
    TruckerDetailComponent.prototype.onSelect = function (trucker) {
        //this.selectedTrucker = trucker;
        //this uses a link parameters array, similar to the one used in the index.html routing
        this._router.navigate(['TruckerDetail', { id: trucker.id }]);
    };
    TruckerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get('id');
        console.log(id);
        this._truckerService.getTrucker(id).then(function (trucker) { return _this.trucker = trucker; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Trucker_1.Trucker)
    ], TruckerDetailComponent.prototype, "trucker", void 0);
    TruckerDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-trucker-detail',
            template: "\n\t<div *ngIf=\"trucker\">\n\t<h2>{{trucker.handle}} details</h2>\n\t<div><label>id: </label>{{trucker.id}}\n\t<div>\n\t<label>name: </label>\n\t<input [(ngModel)]=\"trucker.handle\" placeholder=\"handle\">\n\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, trucker_service_1.TruckerService])
    ], TruckerDetailComponent);
    return TruckerDetailComponent;
}());
exports.TruckerDetailComponent = TruckerDetailComponent;
//# sourceMappingURL=trucker-detail.component.js.map
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
var trucker_service_1 = require('./truckers/trucker.service');
/*
We specify the path all the way back to the application root — app/
in this case — because Angular doesn't support relative paths by default.
We can switch to component-relative paths if we prefer.

Note -- NAB -- this comment may only apply to a more recent version of angular 2
*/
var DashboardComponent = (function () {
    function DashboardComponent(truckerService) {
        this.truckerService = truckerService;
        this.truckers = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.truckerService.getTruckers().then(function (truckers) {
            _this.truckers = truckers.slice(1, 5);
            console.log(truckers);
        });
    };
    DashboardComponent.prototype.gotoDetail = function () { };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [trucker_service_1.TruckerService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
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
var router_1 = require('@angular/router');
//The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
var TruckerListComponent = (function () {
    //truckerService = new TruckerService(); // don't do this. Instead:
    function TruckerListComponent(_truckerService, _router) {
        this._truckerService = _truckerService;
        this._router = _router;
        this.addingTrucker = false;
    }
    TruckerListComponent.prototype.addTrucker = function () {
        this.addingTrucker = true;
        this.selectedTrucker = null;
    };
    TruckerListComponent.prototype.close = function (savedTrucker) {
        this.addingTrucker = false;
        if (savedTrucker) {
            this.getTruckers();
        }
    };
    TruckerListComponent.prototype.delete = function (trucker, event) {
        var _this = this;
        event.stopPropagation();
        this._truckerService
            .delete(trucker)
            .then(function (result) {
            _this.truckers = _this.truckers.filter(function (t) { return t !== trucker; });
            if (_this.selectedTrucker === trucker) {
                _this.selectedTrucker = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    TruckerListComponent.prototype.onSelect = function (trucker) {
        this.selectedTrucker = trucker;
    };
    TruckerListComponent.prototype.getTruckers = function () {
        var _this = this;
        this._truckerService.getTruckers().then(function (t) { return _this.truckers = t; });
    };
    TruckerListComponent.prototype.ngOnInit = function () {
        this.getTruckers();
    };
    TruckerListComponent.prototype.gotoDetail = function () {
        console.log('going');
        this._router.navigate(['/detail', this.selectedTrucker.id]);
    };
    TruckerListComponent = __decorate([
        core_1.Component({
            directives: [trucker_detail_component_1.TruckerDetailComponent],
            selector: 'trucker-convoy',
            templateUrl: 'app/trucker-list.component.html',
            providers: [trucker_service_1.TruckerService],
            styleUrls: ['app/trucker-list.component.css'],
        }), 
        __metadata('design:paramtypes', [trucker_service_1.TruckerService, router_1.Router])
    ], TruckerListComponent);
    return TruckerListComponent;
}());
exports.TruckerListComponent = TruckerListComponent;
//# sourceMappingURL=trucker-list.component.js.map
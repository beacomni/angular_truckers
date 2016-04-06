System.register(['angular2/core', './Trucker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Trucker_1;
    var TruckerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Trucker_1_1) {
                Trucker_1 = Trucker_1_1;
            }],
        execute: function() {
            //parent app component will tell this component which Trucker to display
            TruckerDetailComponent = (function () {
                function TruckerDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Trucker_1.Trucker)
                ], TruckerDetailComponent.prototype, "trucker", void 0);
                TruckerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-trucker-detail',
                        template: "\n<div *ngIf=\"trucker\">\n\t<h2>{{trucker.handle}} details</h2>\n\t<div><label>id: </label>{{trucker.id}}\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input [(ngModel)]=\"trucker.handle\" placeholder=\"handle\">\n\t\t</div>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TruckerDetailComponent);
                return TruckerDetailComponent;
            }());
            exports_1("TruckerDetailComponent", TruckerDetailComponent);
        }
    }
});
//# sourceMappingURL=trucker-detail.component.js.map
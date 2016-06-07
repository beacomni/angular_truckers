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
//Injectable is a function, we'll apply it with the decorator below
var core_1 = require('@angular/core');
//Is it true to say we can basically import anything?  Functions, classes, arrays, constants, etc.
var mock_truckers_1 = require('./mock-truckers');
//Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
//Best practice to add the @Injectable() even if you're not sure you'll need it.
var TruckerService = (function () {
    function TruckerService() {
    }
    TruckerService.prototype.getTruckers = function () {
        //note that I think this is using ES2015 promises, NOT angular $q promises.
        //return Promise.resolve(TRUCKERS);
        return Promise.resolve(mock_truckers_1.TRUCKERS);
    };
    TruckerService.prototype.getTrucker = function (id) {
        return this.getTruckers().then(function (truckers) { return truckers.filter(function (trucker) { return trucker.id === id; })[0]; });
    };
    TruckerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TruckerService);
    return TruckerService;
}());
exports.TruckerService = TruckerService;
//# sourceMappingURL=trucker.service.js.map
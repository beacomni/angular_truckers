System.register(['angular2/core', './mock-truckers'], function(exports_1, context_1) {
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
    var core_1, mock_truckers_1;
    var TruckerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_truckers_1_1) {
                mock_truckers_1 = mock_truckers_1_1;
            }],
        execute: function() {
            //Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
            //Best practice to add the @Injectable() even if you're not sure you'll need it.
            TruckerService = (function () {
                function TruckerService() {
                }
                TruckerService.prototype.getTruckers = function () {
                    //note that I think this is using ES2015 promises, NOT angular $q promises.
                    //return Promise.resolve(TRUCKERS);
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_truckers_1.TRUCKERS); }, 0);
                    });
                };
                TruckerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TruckerService);
                return TruckerService;
            }());
            exports_1("TruckerService", TruckerService);
        }
    }
});
//# sourceMappingURL=trucker.service.js.map
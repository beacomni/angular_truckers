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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
//Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
//Best practice to add the @Injectable() even if you're not sure you'll need it.
var TruckerService = (function () {
    function TruckerService(http) {
        this.http = http;
        this.truckersUrl = 'app/truckers';
    }
    TruckerService.prototype.getTruckers = function () {
        // http get returns an rxjs observable, which we'll convert to a promise, using an operator we import. 
        //json() method to extract response data
        return this.http.get(this.truckersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TruckerService.prototype.getTrucker = function (id) {
        return this.getTruckers().then(function (truckers) { return truckers.filter(function (trucker) { return trucker.id === id; })[0]; });
    };
    TruckerService.prototype.handleError = function (error) {
        console.error('A PROBLEM HAS HAPPENED', error);
        return Promise.reject(error.message || error);
    };
    TruckerService.prototype.post = function (trucker) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.truckersUrl, JSON.stringify(trucker), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TruckerService.prototype.put = function (trucker) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.truckersUrl + "/" + trucker.id;
        return this.http
            .put(url, JSON.stringify(trucker), { headers: headers })
            .toPromise()
            .then(function () { return trucker; })
            .catch(this.handleError);
    };
    TruckerService.prototype.delete = function (trucker) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.truckersUrl + "/" + trucker.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    TruckerService.prototype.save = function (trucker) {
        if (trucker.id) {
            return this.put(trucker);
        }
        return this.post(trucker);
    };
    TruckerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TruckerService);
    return TruckerService;
}());
exports.TruckerService = TruckerService;
//# sourceMappingURL=trucker.service.js.map
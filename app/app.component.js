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
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard.component');
var trucker_list_component_1 = require('./truckers/trucker-list.component');
var trucker_detail_component_1 = require('./truckers/trucker-detail.component');
var trucker_service_1 = require('./truckers/trucker.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Convoy';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h1>{{title}}</h1>\n\t<trucker-convoy></trucker-convoy>\n\t<h1>Component Router</h1>\n\t<nav>\n\t<!-- optional route and query parameters that could go in array to the right of = are not used yet-->\n\t<a [routerLink]=\"['Dashboard']\">Diesel Station</a>\n\t<a [routerLink]=\"['Truckers']\">Truckers</a>\n\t</nav>\n\t<!--A template may hold exactly one unnamed <router-outlet>.-->\n\t<router-outlet></router-outlet>\n\t",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, trucker_service_1.TruckerService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
            { path: '/truckers', name: 'Truckers', component: trucker_list_component_1.TruckerListComponent },
            { path: '/trucker/:id', name: 'TruckerDetail', component: trucker_detail_component_1.TruckerDetailComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
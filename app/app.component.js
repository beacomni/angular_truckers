System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent, Trucker, TRUCKERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
            AppComponent = (function () {
                function AppComponent() {
                    this.truckers = TRUCKERS;
                }
                AppComponent.prototype.onSelect = function (trucker) {
                    this.selectedTrucker = trucker;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<h2>Convoy</h2> \n\t<ul class=\"truckers\">\n\t  <li *ngFor=\"#trucker of truckers\" \n\t      (click)=\"onSelect(trucker)\" \n\t      [class.selected]=\"trucker===selectedTrucker\">\n\t      <span class=\"badge\">{{trucker.id}}</span> {{trucker.handle}}\n\t  </li>\n\t</ul>\n\t<div *ngIf=\"selectedTrucker\">\n      <h2>{{selectedTrucker.handle}} details</h2>\n        <div><label>id: </label>{{selectedTrucker.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"selectedTrucker.handle\" placeholder=\"handle\" />\n        </div>\n    </div>\n\t",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n\t   }\n  .truckers {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .truckers li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .truckers li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .truckers li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .truckers .text {\n    position: relative;\n    top: -3px;\n  }\n  .truckers .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Trucker = (function () {
                function Trucker() {
                }
                return Trucker;
            }());
            exports_1("Trucker", Trucker);
            TRUCKERS = [
                { "id": 11, "handle": "Kevin-San" },
                { "id": 12, "handle": "Narcolepsue" },
                { "id": 13, "handle": "Barry the Egg" },
                { "id": 14, "handle": "Ol Handy" },
                { "id": 15, "handle": "Tinpan Mcgraw" },
                { "id": 16, "handle": "Sampson" },
                { "id": 17, "handle": "Nega" },
                { "id": 18, "handle": "Horty" },
                { "id": 19, "handle": "El Virus" },
                { "id": 20, "handle": "Shugga T" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map
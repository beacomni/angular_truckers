"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
/*
We generally recommend registering application-wide services in the root AppComponent providers.
Here we're registering in main for a special reason.
Our application is in the early stages of development and far
from ready for production. We don't even have a web server that can handle requests for heroes. Until we do, we'll have to fake it.
*/
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(http_2.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
    core_1.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: in_memory_data_service_1.InMemoryDataService })
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map
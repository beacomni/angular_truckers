import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
/*
We generally recommend registering application-wide services in the root AppComponent providers. 
Here we're registering in main for a special reason.
Our application is in the early stages of development and far 
from ready for production. We don't even have a web server that can handle requests for heroes. Until we do, we'll have to fake it.
*/
import {HTTP_PROVIDERS} from '@angular/http'

import {provide} from '@angular/core';
import {XHRBackend} from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

bootstrap(AppComponent,[
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(XHRBackend,{useClass: InMemoryBackendService}),
	provide(SEED_DATA,{useClass:InMemoryDataService})
	]).catch(err => console.error(err));
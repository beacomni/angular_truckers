import {provideRouter,RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {TruckerListComponent} from './truckers/trucker-list.component';
import {TruckerDetailComponent} from './truckers/trucker-detail.component';

export const routes: RouterConfig = [
	{ path: 'detail/:id', component: TruckerDetailComponent },
	{ path: 'Dashboard', component: DashboardComponent },
	{ path: 'Truckers', component: TruckerListComponent },
	{ path: '', component: DashboardComponent },
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];

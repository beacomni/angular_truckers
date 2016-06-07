import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard.component';
import {TruckerListComponent} from './truckers/trucker-list.component';
import {TruckerDetailComponent} from './truckers/trucker-detail.component';
import {TruckerService} from './truckers/trucker.service'

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<trucker-convoy></trucker-convoy>
	<nav>
	<!-- optional route and query parameters that could go in array to the right of = are not used yet-->
	<a [routerLink]="['Dashboard']">Diesel Station</a>
	<a [routerLink]="['Truckers']">Truckers</a>
	</nav>
	<!--A template may hold exactly one unnamed <router-outlet>.-->
	<router-outlet></router-outlet>
	`,
	styleUrls:['app/app.component.css']
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS,TruckerService]
	
})

@RouteConfig([
	{path:'/dashboard', name:'Dashboard',component:DashboardComponent},
	{ path: '/truckers', name: 'Truckers', component: TruckerListComponent },
	{ path: '/detail/:id', name: 'TruckerDetail', component: TruckerDetailComponent },
	])

export class AppComponent {
	title = 'Convoy';
}
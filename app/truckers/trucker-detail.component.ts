import {Component, Input,OnInit} from '@angular/core';
import {Trucker} from './Trucker';
import {Router, RouteParams} from '@angular/router-deprecated';
import {TruckerService} from './trucker.service';

//parent app component will tell this component which Trucker to display
@Component({
	selector: 'my-trucker-detail',
	template: `
	<div *ngIf="trucker">
	<h2>{{trucker.handle}} details</h2>
	<div><label>id: </label>{{trucker.id}}
	<div>
	<label>name: </label>
	<input [(ngModel)]="trucker.handle" placeholder="handle">
	</div>
	</div>
	`
})

export class TruckerDetailComponent{
	@Input()
	trucker : Trucker;

	//The router extracts the route parameter (id:) from the URL and supplies it to the TruckerDetailComponent via the RouteParams service
	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _truckerService: TruckerService) { }

	public truckers: Trucker[];
	title: 'Convoy';
	selectedTrucker: Trucker;

	onSelect(trucker: Trucker) {
		//this.selectedTrucker = trucker;
		//this uses a link parameters array, similar to the one used in the index.html routing
		this._router.navigate(['TruckerDetail', { id: trucker.id }]);
	}

	ngOnInit() {
		let id = this._routeParams.get('id');
		console.log(id);
		this._truckerService.getTrucker(id).then(trucker => this.trucker = trucker)
	}
}


import {Component, OnInit} from '@angular/core';
import {TruckerDetailComponent} from './trucker-detail.component';
import {TruckerService} from './trucker.service';
import {Trucker} from './Trucker';
import {Router} from '@angular/router-deprecated';

//The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
@Component({
	directives: [TruckerDetailComponent],
	selector: 'trucker-convoy',
	templateUrl: 'app/trucker-list.component.html',
	providers:[TruckerService],
	styleUrls: ['app/trucker-list.component.css'],
})

//The router extracts the route parameter (id:) from the URL and supplies it to the TruckerListComponent via the RouteParams service
export class TruckerListComponent implements OnInit {
	//truckerService = new TruckerService(); // don't do this. Instead:
	constructor(
		private _truckerService: TruckerService,
		private _router: Router) { }

	public truckers: Trucker[];
	title: 'Convoy';
	selectedTrucker: Trucker;
	addingTrucker = false;
	error: any;

	addTrucker(){
		this.addingTrucker = true;
		this.selectedTrucker = null;
	}

	close(savedTrucker: Trucker){
		this.addingTrucker = false;
		if (savedTrucker) { this.getTruckers();}
	}

	delete(trucker: Trucker, event: any){
		event.stopPropagation();
		this._truckerService
		  .delete(trucker)
		.then(result => {
			this.truckers = this.truckers.filter(t => t !== trucker);
			if (this.selectedTrucker === trucker) { this.selectedTrucker = null; }
		})
			.catch(error => this.error = error);
	}

	onSelect(trucker: Trucker) {
		this.selectedTrucker = trucker;
	}

	getTruckers() {
		this._truckerService.getTruckers().then(t => this.truckers = t);
	}

	ngOnInit() {
		this.getTruckers();
	}

	gotoDetail(){
		console.log('going');
		this._router.navigate(['TruckerDetail',{id: this.selectedTrucker.id}]);
	}
}


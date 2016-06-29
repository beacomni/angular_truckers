import {Component,EventEmitter, Input,Output,OnInit,OnDestroy} from '@angular/core';
import {Trucker} from './Trucker';
import {Router,ActivatedRoute} from '@angular/router';
import {TruckerService} from './trucker.service';

//parent app component will tell this component which Trucker to display
@Component({
  selector: 'my-trucker-detail',
  templateUrl: 'app/trucker-detail.component.html',
  styleUrls:['app/trucker-detail.component.css']
})

export class TruckerDetailComponent{
	@Input() trucker: Trucker;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false; //true if navigated here
	private sub: any;

	//The router extracts the route parameter (id:) from the URL and supplies it to the TruckerDetailComponent via the RouteParams service
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
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
		this.sub = this._activatedRoute.params.subscribe(params =>{
			if (params['id']){
				let id = +params['id'];
				this.navigated = true;
				this._truckerService.getTrucker(id)
					.then(trucker => this.trucker = trucker);	
			}
			else {
				this.navigated = false;
				this.trucker = new Trucker();
			}
		});
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}

	save(){
		this._truckerService.save(this.trucker)
			.then(trucker => {
				this.trucker = trucker;
				this.goBack(trucker);
			})
			.catch(error => this.error = error);
	}

	//Going back too far could take us out of the application. 
	//That's acceptable in a demo. We'd guard against it in a real application, perhaps with the routerCanDeactivate hook.

	//The emit "handshake" between TruckerDetailComponent and Trucker List Component is an example of component to component communication. 
	goBack(savedTrucker : Trucker = null){
		this.close.emit(savedTrucker);
		if(this.navigated){
			window.history.back();
		}
	}
}


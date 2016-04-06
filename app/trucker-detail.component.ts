import {Component, Input} from 'angular2/core';
import {Trucker} from './Trucker';

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
}
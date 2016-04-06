import {Component} from 'angular2/core';

//The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template.
@Component({
	selector: 'my-app',
	template: `
	<h2>Convoy</h2> 
	<ul class="truckers">
	  <li *ngFor="#trucker of truckers" 
	      (click)="onSelect(trucker)" 
	      [class.selected]="trucker===selectedTrucker">
	      <span class="badge">{{trucker.id}}</span> {{trucker.handle}}
	  </li>
	</ul>
	<div *ngIf="selectedTrucker">
      <h2>{{selectedTrucker.handle}} details</h2>
        <div><label>id: </label>{{selectedTrucker.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="selectedTrucker.handle" placeholder="handle" />
        </div>
    </div>
	`,
	styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
	   }
  .truckers {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .truckers li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .truckers li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .truckers li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .truckers .text {
    position: relative;
    top: -3px;
  }
  .truckers .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
	public truckers = TRUCKERS;
	title : 'Convoy';
	selectedTrucker : Trucker;
	onSelect(trucker: Trucker){
		this.selectedTrucker = trucker;
	}
}

export class Trucker  {
	id: number;
	handle: string;
}

var TRUCKERS : Trucker[] = [
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
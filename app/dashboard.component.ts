import {Component,OnInit} from '@angular/core';

import {Trucker} from './truckers/Trucker';
import {TruckerService} from './truckers/trucker.service';
/*
We specify the path all the way back to the application root — app/ 
in this case — because Angular doesn't support relative paths by default. 
We can switch to component-relative paths if we prefer.

Note -- NAB -- this comment may only apply to a more recent version of angular 2
*/
@Component({
	selector: 'my-dashboard',
	templateUrl:'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  truckers: Trucker[] = [];

  constructor(private truckerService: TruckerService){}

  ngOnInit(){
  	this.truckerService.getTruckers().then(truckers => {
  		this.truckers = truckers.slice(1,5);
  		console.log(truckers);
  	});
  }

  gotoDetail(){}
}
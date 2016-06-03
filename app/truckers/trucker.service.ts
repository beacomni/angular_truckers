//Injectable is a function, we'll apply it with the decorator below
import {Injectable} from '@angular/core';
//Is it true to say we can basically import anything?  Functions, classes, arrays, constants, etc.
import {TRUCKERS} from './mock-truckers'; 
import {Trucker} from './Trucker';


//Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
//Best practice to add the @Injectable() even if you're not sure you'll need it.
@Injectable()
export class TruckerService{
	getTruckers(){
		//note that I think this is using ES2015 promises, NOT angular $q promises.
		//return Promise.resolve(TRUCKERS);
		return new Promise<Trucker[]>(resolve =>
			setTimeout(() => resolve(TRUCKERS), 0));
	}

	getTrucker(id){
		return new Promise<Trucker>(resolve => {
			let foundTruckers = TRUCKERS.filter(trucker => { return trucker.id === id; });
			console.log(foundTruckers);
			if(foundTruckers.length === 1) {resolve(foundTruckers[0])};
		})
	}
}
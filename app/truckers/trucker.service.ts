//Injectable is a function, we'll apply it with the decorator below
import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
//Is it true to say we can basically import anything?  Functions, classes, arrays, constants, etc.
import {TRUCKERS} from './mock-truckers'; 
import {Trucker} from './Trucker';
import 'rxjs/add/operator/toPromise';

//Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
//Best practice to add the @Injectable() even if you're not sure you'll need it.
@Injectable()
export class TruckerService{
	private truckersUrl = 'app/truckers';

	constructor(private http: Http){}

	getTruckers() : Promise<Trucker[]>{
		// http get returns an rxjs observable, which we'll convert to a promise, using an operator we import. 
		//json() method to extract response data
		return this.http.get(this.truckersUrl)
			.toPromise()
			.then(response => response.json().data)
			.catch(this.handleError);
	}

	getTrucker(id){
		return this.getTruckers().then(truckers => truckers.filter(trucker => trucker.id === id)[0]);
	}

	private handleError(error: any){
		console.error('A PROBLEM HAS HAPPENED', error);
		return Promise.reject(error.message || error);
	}

	private post(trucker: Trucker): Promise<Trucker>{
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http.post(this.truckersUrl, JSON.stringify(trucker), { headers: headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	private put(trucker: Trucker){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.truckersUrl}/${trucker.id}`;

		return this.http
			.put(url, JSON.stringify(trucker), { headers: headers })
			.toPromise()
			.then(() => trucker)
			.catch(this.handleError);
	}

	delete(trucker: Trucker){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.truckersUrl}/${trucker.id}`;

		return this.http
			.delete(url, headers)
			.toPromise()
			.catch(this.handleError);
	}

	save(trucker:Trucker): Promise<Trucker> {
		if(trucker.id){
			return this.put(trucker);
		}
		return this.post(trucker);
	}
}
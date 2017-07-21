import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AddService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
   this.geocaches = af.list('geocaches');
  }

  getGeocaches(){
    return this.geocaches;
  }

  addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
  }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

  getLatLng(number: string, street: string, city: string, state: string, zip: string){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?' + 'address=' + number + '+' + street + '+' + city + '+' + state + '+' + zip);
  }

}

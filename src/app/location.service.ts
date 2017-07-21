import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {

  constructor(private http: Http) { }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

  getLatLng(number: string, street: string, city: string, state: string, zip: string){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?' + 'address=' + number + '+' + street + '+' + city + '+' + state + '+' + zip);
  }
}

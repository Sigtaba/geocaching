import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class LocationService {

  constructor(private http: Http) { }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }


}

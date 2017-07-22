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

  getAddress(address: string, creator: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +address+ "&api_key=" +geoKey)
    .subscribe(response => {
      let jsonGeocache: Geocache;
      for(let cache of response.json().results) {
        jsonGeocache = new Geocache(cache.geometry.location.lat, cache.geometry.location.lng, creator, cache.formatted_address);
        this.addGeocache(jsonGeocache);
      }
    });
  }

  getCoordinates(lat: string, lng: string, creator: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey)
    .subscribe(response => {
      let jsonGeocache: Geocache;
      for(let cache of response.json().results) {
        jsonGeocache = new Geocache(cache.geometry.location.lat, cache.geometry.location.lng, creator, cache.formatted_address);
        this.addGeocache(jsonGeocache);
      }
    });
  }

}

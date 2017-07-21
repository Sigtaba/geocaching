import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AddService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
   this.geocaches = database.list('geocaches');
  }

  getGeocaches(){
    return this.geocaches;
  }

  addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
  }

}

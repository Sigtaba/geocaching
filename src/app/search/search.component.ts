import { Component, OnInit, Input } from '@angular/core';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { AddService } from '../add.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AddService]
})
export class SearchComponent implements OnInit {

  geocaches: FirebaseListObservable<any[]>;

  constructor(private router: Router, private addService: AddService){}
  listedGeocaches: FirebaseListObservable <any[]> = null;

  ngOnInit(){
     this.listedGeocaches = this.addService.getGeocaches();
   }

  moreInfo(clickedGeocache) {
     this.router.navigate(['geocaches', clickedGeocache.$key]);
     console.log(clickedGeocache.$key)
   };

}

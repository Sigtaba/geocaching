import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocationService } from '../location.service';
import { apiKey } from '../api-keys';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ LocationService ]
})
export class SearchComponent implements OnInit {
  geocaches: any[]=null;
  // noCaches: boolean=false;

  constructor(private locations: LocationService) { }

  ngOnInit() {
  }

  getLocations(lat: string, lng: string) {
    // this.noCaches = false;
    this.locations.getPhysicalAddress(lat, lng).subscribe(response =>{
      this.geocaches = response.json()
      console.log(lat);
      console.log(this.geocaches);
      console.log(apiKey.geoKey);
    });
  }

}

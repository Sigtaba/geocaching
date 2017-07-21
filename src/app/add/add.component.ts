import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { LocationService } from '../location.service';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ AddService, LocationService ]
})

export class AddComponent implements OnInit {
  geocacheLocation: any[]=null;
  result: any = null;
  search: string = null;

  constructor(private addService: AddService, private locationService: LocationService) { }

  ngOnInit() {
  }

  getLatLongFromForm(lat: string, lng: string) {
    this.addService.getPhysicalAddress(lat, lng).subscribe
      (response => {
      this.geocacheLocation = response.json().results[0].formatted_address;
    })
  }

  submitForm(lat: string, lng: string, creator: string) {
    var newGeocache: Geocache = new Geocache(lat, lng, creator);
    this.addService.addGeocache(newGeocache);
  }
}

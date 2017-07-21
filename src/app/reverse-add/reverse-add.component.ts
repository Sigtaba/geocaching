import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { LocationService } from '../location.service';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-reverse-add',
  templateUrl: './reverse-add.component.html',
  styleUrls: ['./reverse-add.component.css'],
  providers: [ AddService, LocationService ]
})
export class ReverseAddComponent implements OnInit {

  constructor(private addService: AddService) { }

  ngOnInit() {
  }

  submitForm(address: string) {
    var lat = null;
    var lng = null;
    var creator = null;

    // var address = number.value; 
    //
    // var newGeocache: Geocache = new Geocache(lat, lng, creator, address);
    // this.addService.addGeocache(newGeocache);
  }

}

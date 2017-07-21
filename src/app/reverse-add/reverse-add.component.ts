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

  constructor() { }

  ngOnInit() {
  }

  // getCoordinates(address: string): void {
  //     this.locationService.getLatLng(address).subscribe(response => {
  //       this.search = `address: ${address}`;
  //       this.result = response.json().results[0].geometry.location;
  //     });
  //   }

}

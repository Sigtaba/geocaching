import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AddService } from '../add.service';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ AddService ]
})

export class AddComponent implements OnInit {
  geocaches: any[];

  constructor(private addService: AddService) { }
  // addAddress(address: string) {
  //   this.addService.getLatLng(address).subscribe(response => {
  //     this.geocaches = response.json();
  //     console.log(this.geocaches);
  //   });
  // }

  saveAddress(address: string, creator: string){
    this.addService.getAddress(address);
    alert("The following address, " + address + " ,has been saved to the database.")
  }

  ngOnInit() {
  }

  saveCoordinates(lat: string, lng: string, creator: string, address: string) {
    address = "null";
    var newGeocache: Geocache = new Geocache(lat, lng, creator, address);
    this.addService.addGeocache(newGeocache);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AddService } from '../add.service';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ AddService ]
})

export class AddComponent implements OnInit {
  geocaches: any[];
  address: any[] = null;

  constructor(private addService: AddService) { }

  saveAddress(address: string, creator: string){
    var creator = "Tom";
    this.addService.getAddress(address, creator);
    alert("address saved")
  }

  ngOnInit() {
  }

  saveCoordinates(lat: string, lng: string, creator: string) {
    var creator = "Tim";
    this.addService.getCoordinates(lat, lng, creator);
    alert("Coordinates saved")
  }

}

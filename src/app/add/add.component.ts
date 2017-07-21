import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ AddService ]
})

export class AddComponent implements OnInit {

  constructor(private addService: AddService) { }

  ngOnInit() {
  }

  submitForm(lat: string, lng: string, creator: string) {
    var newGeocache: Geocache = new Geocache(lat, lng, creator);
    this.addService.addGeocache(newGeocache);
  }

}

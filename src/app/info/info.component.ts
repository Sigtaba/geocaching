import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';
import { AddService } from '../add.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [AddService]
})
export class InfoComponent implements OnInit {
  detailId: string;
  geocaches: any[];
  detailToDisplay: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private addService: AddService) { }

  ngOnInit() {
    this.addService.getGeocaches().subscribe(data => {
      this.geocaches = data;
    });

    this.route.params.forEach((urlParameters) => {
      this.detailId = urlParameters['id'];
    });

    this.detailToDisplay = this.addService.getDetailById(this.detailId);

  }
}

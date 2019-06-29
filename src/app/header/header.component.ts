import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/service/location.service';

@Component({
  selector: 'cr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentDate: Date;

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    console.log('header');
    this.currentDate = new Date();
  }

}

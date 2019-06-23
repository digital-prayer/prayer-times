import { Component, OnInit } from '@angular/core';
import { PrayerTimes } from '../shared/model/prayer-times';
import { PrayerService } from '../shared/service/prayer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cr-prayer-times',
  templateUrl: './prayer-times.component.html',
  styleUrls: ['./prayer-times.component.css']
})
export class PrayerTimesComponent implements OnInit {

  prayerTimes$: Observable<PrayerTimes>;

  constructor(private prayerService: PrayerService) {
  }

  ngOnInit() {
    this.initData();
    this.prayerService.prayerChangedSubject.subscribe(prayer => {
      if (prayer) {
        this.initData();
      }
    });
  }


  private initData() {
    const myDate = new Date();
    const month = myDate.getMonth().toString();
    this.prayerTimes$ = this.prayerService.getPrayers(month);
  }


}

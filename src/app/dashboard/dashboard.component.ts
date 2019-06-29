import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { PrayerService } from '../shared/service/prayer.service';
import { CountdownComponent } from 'ngx-countdown';
import { Prayer } from '../shared/model/prayer';
import { TimeService } from '../shared/service/time.service';
import { TranslationService } from '../shared/service/translation.service';
import { LocationService } from '../shared/service/location.service';
import { SurahService } from '../shared/service/surah.service';

@Component({
  selector: 'cr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentDate: Date;
  public nextPrayer$: Observable<Prayer>;
  private leftTime: number;

  @ViewChild('counter') counter: CountdownComponent;

  constructor(private prayerService: PrayerService,
              private timeService: TimeService,
              private translationService: TranslationService,
              public locationService: LocationService,
              private surahService: SurahService) {
  }


  ngOnInit() {
    this.initDate();
    this.initAndStartTimer();
    this.initLeftTime();
  }


  onTimerFinished() {
    this.initLeftTime();
    setTimeout(() => this.counter.restart());
  }


  getLeftTime() {
    return this.leftTime;
  }


  private initAndStartTimer() {
    const boundedTimer = timer(0, 1000);
    boundedTimer.subscribe(() => {
      this.updateTime();
      this.prayerService.updatePrayers(this.currentDate);
      this.refreshWindowAtMidnight();
    });
  }

  private updateTime() {
    this.currentDate = new Date();
  }


  private initDate() {
    this.currentDate = new Date();
  }

  private initLeftTime() {
    this.prayerService.nextPrayerSubject.subscribe(prayer => {
      if (prayer) {
        const dateOfPrayer = this.timeService.parseToDate(prayer.time);
        this.leftTime = this.timeService.getTimeLeftTo(dateOfPrayer);
        this.nextPrayer$ = of(prayer);
      }
    });
  }


  private refreshWindowAtMidnight() {
    const midnight = this.timeService.isMidnight(this.currentDate);
    console.log(midnight);
    if (midnight) {
      this.prayerService.prayerChangedSubject.next(null);
    }
  }
}

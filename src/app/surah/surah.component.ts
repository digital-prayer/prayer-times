import { Component, OnInit } from '@angular/core';
import { SurahService } from '../shared/service/surah.service';
import { Observable } from 'rxjs';
import { Surah } from '../shared/model/surah';
import { PrayerService } from '../shared/service/prayer.service';

@Component({
  selector: 'cr-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css']
})
export class SurahComponent implements OnInit {

  public surah$: Observable<Surah>;

  constructor(private surahService: SurahService, private prayerService: PrayerService) {
  }

  ngOnInit() {
    this.initData();
    this.listenToPrayerService();
  }

  private initData() {
    this.surah$ = this.surahService.getRandomSurah();
  }

  private listenToPrayerService() {
    this.prayerService.prayerChangedSubject.subscribe(prayer => {
      if (prayer) {
        this.initData();
      }
    });
  }

  getAyah(surah: Surah) {
    const ayah = surah.ayahs[0];
    return `${ayah.text} [${surah.turkishName}-(${surah.number}:${ayah.number})]`;
  }
}

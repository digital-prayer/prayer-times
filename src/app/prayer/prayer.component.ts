import { Component, Input } from '@angular/core';
import { Prayer } from '../shared/model/prayer';
import { TranslationService } from '../shared/service/translation.service';
import { PrayerService } from '../shared/service/prayer.service';

@Component({
  selector: 'cr-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent {

  @Input()
  public prayer: Prayer;


  constructor(private translationService: TranslationService,
              private prayerService: PrayerService) {
  }


  getLatin() {
    return this.translationService.translateToLatin(this.prayer.name);
  }

  getArabic() {
    return this.translationService.translateToArabic(this.prayer.name);
  }

  isCurrentPrayer(prayer: Prayer) {
    return this.prayerService.isCurrentPrayer(prayer);
  }

  styleObject() {
    if (this.isCurrentPrayer(this.prayer)) {
      return {'background-color': 'green', 'border-radius': '10px'};
    }
    return {};
  }


}

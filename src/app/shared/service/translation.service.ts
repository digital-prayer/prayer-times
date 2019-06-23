import { Injectable } from '@angular/core';
import { PrayerLatinName } from '../model/prayer-latin-name';
import { PrayerArabicName } from '../model/prayer-arabic-name';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  translateToLatin(prayerName: string): string {
    return PrayerLatinName[prayerName];
  }

  translateToArabic(prayerName: string): string {
    return PrayerArabicName[prayerName];
  }

}

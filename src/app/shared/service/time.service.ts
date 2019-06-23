import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private datePipe: DatePipe) {
  }

  parseToDate(time: string) {
    const date = new Date();
    const timeTokens = time.split(':');

    date.setHours(+timeTokens[0]);
    date.setMinutes(+timeTokens[1]);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  /**
   *
   * Returns the remaining time in seconds to the next prayer
   *
   * @param nextPrayerTime represents the next prayer
   */
  getTimeLeftTo(nextPrayerTime: Date): number {

    const today = new Date();
    const seconds = (nextPrayerTime.getTime() - today.getTime()) / 1000;
    return seconds;
  }

  /**
   * Returns the day of the month
   */
  getDay(date: Date): number {
    const dateAsString = this.datePipe.transform(date, 'dd.MM.yyyy');
    return +dateAsString.split('.')[0];
  }

  /**
   *
   * @param date
   */
  getHours(date: Date): number {
    const timeAsString = this.datePipe.transform(date, 'HH:mm');
    return +timeAsString.split(':')[0];
  }

  /**
   *
   * @param date
   */
  getMinutes(date: Date): number {
    const timeAsString = this.datePipe.transform(date, 'HH:mm');
    return +timeAsString.split(':')[1];
  }


  /**
   *
   * @param dateAsString
   * @param otherDate
   */
  isLogicalEqual(dateAsString: string, otherDate: Date) {
    const dateOfNextPrayer = this.parseToDate(dateAsString);

    return this.getHours(otherDate) === this.getHours(dateOfNextPrayer) &&
      this.getMinutes(otherDate) === this.getMinutes(dateOfNextPrayer);
  }
}

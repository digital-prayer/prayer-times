/**
 *
 */
import { Prayer } from './prayer';

export interface PrayerTimes {

  /**
   * Shows the current date
   */
  timeStamp: number;

  /**
   * Consists the whole prayers of each day
   */
  prayers: Array<Prayer>;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {
  }

  /**
   * Returns the name of the city of the current location
   */
  getLocation() {
    return 'Nürnberg';
  }
}

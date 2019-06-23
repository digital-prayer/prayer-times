import { TestBed } from '@angular/core/testing';

import { PrayerService } from './prayer.service';

describe('PrayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrayerService = TestBed.get(PrayerService);
    expect(service).toBeTruthy();
  });
});

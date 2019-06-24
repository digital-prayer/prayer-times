import { TestBed } from '@angular/core/testing';

import { SurahService } from './surah.service';

describe('SurahService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurahService = TestBed.get(SurahService);
    expect(service).toBeTruthy();
  });
});

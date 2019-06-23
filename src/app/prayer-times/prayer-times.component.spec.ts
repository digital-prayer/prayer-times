import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTimesComponent } from './prayer-times.component';

describe('PrayerTimesComponent', () => {
  let component: PrayerTimesComponent;
  let fixture: ComponentFixture<PrayerTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

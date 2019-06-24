import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahComponent } from './surah.component';

describe('SurahComponent', () => {
  let component: SurahComponent;
  let fixture: ComponentFixture<SurahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

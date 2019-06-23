import { TimeService } from './time.service';
import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

describe('TimeService', () => {

// Arrange
  let service: TimeService;


  beforeEach(() => {
    const datePipeMock =  new DatePipe('en-US');
    service = new TimeService(datePipeMock);

    TestBed.configureTestingModule({
      providers: [{
        provide: DatePipe,
        useValue: datePipeMock
      }]
    }).compileComponents();
  });

  it('should  rate up a book by one', () => {

    const dPipe = TestBed.get(DatePipe);
    spyOn(dPipe, 'transform').and.callThrough();

    const today = new Date(2019, 11, 20, 13, 45);
    const result = service.isLogicalEqual('13:45', today);
    expect(result).toBeTruthy();
  });

});

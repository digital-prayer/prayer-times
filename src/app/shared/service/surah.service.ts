import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, retryWhen, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Surah } from '../model/surah';

const uri = 'https://digital-prayer.herokuapp.com/quran/surah/random';


@Injectable({
  providedIn: 'root'
})
export class SurahService {

  constructor(private http: HttpClient) {
  }

  getRandomSurah(): Observable<Surah> {
    return this.http.get<Surah>(uri).pipe(
      retryWhen(errors => errors.pipe(delay(5000), take(5)))
    );
  }
}

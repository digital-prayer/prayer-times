import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { PrayerComponent } from './prayer/prayer.component';
import { FormsModule } from '@angular/forms';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { CountdownModule } from 'ngx-countdown';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SurahComponent } from './surah/surah.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrayerComponent,
    PrayerTimesComponent,
    HeaderComponent,
    FooterComponent,
    SurahComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CountdownModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

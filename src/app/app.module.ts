import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SecondQuestionComponent } from './second-question/second-question.component';
import { ThirdQuestionComponent } from './third-question/third-question.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { FourthQuestionComponent } from './fourth-question/fourth-question.component';
import { BreakfastSecondQuestionComponent } from './breakfast-second-question/breakfast-second-question.component';
import { getResultService } from './shared/get-result.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    ResultsComponent,
    FourthQuestionComponent,
    BreakfastSecondQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [getResultService],
  bootstrap: [AppComponent],
})
export class AppModule {}

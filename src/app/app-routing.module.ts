import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastSecondQuestionComponent } from './breakfast-second-question/breakfast-second-question.component';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { FourthQuestionComponent } from './fourth-question/fourth-question.component';
import { ResultsComponent } from './results/results.component';
import { SecondQuestionComponent } from './second-question/second-question.component';
import { ThirdQuestionComponent } from './third-question/third-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/firstquestion', pathMatch: 'full'},
  { path: 'firstquestion', component: FirstQuestionComponent},
  { path: 'secondquestion', component: SecondQuestionComponent},
  { path: 'thirdquestion', component: ThirdQuestionComponent},
  { path: 'fourthquestion', component: FourthQuestionComponent},
  { path: 'breakfastsecondquestion', component: BreakfastSecondQuestionComponent},
  { path: 'results', component: ResultsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

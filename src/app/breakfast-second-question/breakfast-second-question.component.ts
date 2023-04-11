import { Component, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';

@Component({
  selector: 'app-breakfast-second-question',
  templateUrl: './breakfast-second-question.component.html',
  styleUrls: ['./breakfast-second-question.component.scss']
})
export class BreakfastSecondQuestionComponent implements OnInit {

  constructor(private getresult: getResultService) { }

  ngOnInit(): void {
  }

  onClick1() {
    this.getresult.setBreakfastSecondResponse('protein/');
  }

  onClick2() {
    this.getresult.setBreakfastSecondResponse('no-protein/');

  }

}

import { Component, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss']
})
export class SecondQuestionComponent implements OnInit {
  constructor(private getresult: getResultService) { }

  ngOnInit(): void {
  }

  onClick1() {
    this.getresult.setSecondResponse('chicken/');
  }
  onClick2() {
    this.getresult.setSecondResponse('meat/');
  }
  onClick3() {
    this.getresult.setSecondResponse('vegetarian/');
  }
}

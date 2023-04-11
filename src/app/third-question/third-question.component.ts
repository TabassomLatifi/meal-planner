import { Component, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss']
})
export class ThirdQuestionComponent implements OnInit {
  thirdResponse: string = 'D';

  constructor(private getresult: getResultService) { }

  ngOnInit(): void {
  }

  onClick1() {
    this.getresult.setThirdResponse('healthy/');
  }
  onClick2() {
    this.getresult.setThirdResponse('fatty/');
  }
  onClick3() {
    this.getresult.setThirdResponse('normal/');
  }
}

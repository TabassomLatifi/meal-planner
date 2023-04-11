import { Component, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss']
})
export class FourthQuestionComponent implements OnInit {

  constructor(private getresult: getResultService) { }

  ngOnInit(): void {
  }

  onClick1() {
    this.getresult.setFourthResponse('fast/');
  }
  onClick2() {
    this.getresult.setFourthResponse('normal/');
  }
  onClick3() {
    this.getresult.setFourthResponse('slow/');
  }
}

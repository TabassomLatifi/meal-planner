import { Component, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';


@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {

  firstResponse: string = '';

  constructor(private getResult: getResultService) { }

  ngOnInit(): void {
  }

  onClick1() {
    this.getResult.setFirstResponse('breakfast/');
  }

  onClick2() {
    this.getResult.setFirstResponse('lunch/');

  }

  onClick3() {
    this.getResult.setFirstResponse('dinner/');
  }
}

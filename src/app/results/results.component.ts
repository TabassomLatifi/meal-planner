import { Component, Input, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  result: string = '';
  constructor(private getresult: getResultService) {}

  ngOnInit(): void {
    this.getresult.getResult().subscribe(response => {
      this.result = response;
    })
  }
}

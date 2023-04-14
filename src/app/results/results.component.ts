import { Component, Input, OnInit } from '@angular/core';
import { getResultService } from '../shared/get-result.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  result: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(private getresult: getResultService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getresult.getResult().subscribe(response => {
      this.isLoading = false;
      this.result = response;
    }, error => {
      this.isLoading = false;
      this.result = 'متاسفانه در ارتباط با سرور مشکلی پیش آمده';
    })
  }

  reset() {
    this.router.navigate(['/firstquestion']);
  }

  newOffer() {
    this.isLoading = true;
    this.getresult.getResult().subscribe(response => {
      this.isLoading = false;
      this.result = response;
    }, error => {
      this.isLoading = false;
      this.result = 'متاسفانه در ارتباط با سرور مشکلی پیش آمده';
    })
  }
}

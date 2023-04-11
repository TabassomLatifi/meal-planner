import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class getResultService {
  constructor(private http: HttpClient) {}
  private firstResponse: string = '';
  private breakfastSecondResponse: string = '';
  private secondResponse: string ='';
  private thirdResponse: string ='';
  private fourthResponse: string ='';

  public setFirstResponse(value: string) {
    this.firstResponse = value;
  }
  public setBreakfastSecondResponse(value: string) {
    this.breakfastSecondResponse = value;
  }
  public setSecondResponse(value: string) {
    this.secondResponse = value;
  }
  public setThirdResponse(value: string) {
    this.thirdResponse = value;
  }
  public setFourthResponse(value: string) {
    this.fourthResponse = value;
  }

  getResult() {
    if (this.firstResponse === 'breakfast/') {
      return this.http
        .get<string>(
          'https://meal-planner-63a63-default-rtdb.firebaseio.com/' +
            this.firstResponse + this.breakfastSecondResponse + this.thirdResponse + this.fourthResponse +
            '.json'
        )
    } else {
      return this.http
        .get<string>(
          'https://meal-planner-63a63-default-rtdb.firebaseio.com/' +
            this.firstResponse + this.secondResponse + this.thirdResponse + this.fourthResponse +
            '.json'
        )
    }
  }
}

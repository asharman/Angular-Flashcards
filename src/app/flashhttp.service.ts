import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlashService } from './flash.service';
import { map } from 'rxjs/operators';
import { TriviaDBResponse } from './trivia-dbresponse';
import { IFlash } from './flash.model';

@Injectable({
  providedIn: 'root',
})
export class FlashhttpService {
  constructor(private flashService: FlashService, private http: HttpClient) {}

  getQuestions(): void {
    this.http
      .get('https://opentdb.com/api.php?amount=10&type=multiple')
      .pipe(
        map((response: TriviaDBResponse) =>
          response.results.map(
            (question): IFlash => ({
              question: question.question,
              answer: question.correct_answer,
              show: false,
              id: this.flashService.currentIndex++,
            })
          )
        )
      )
      .subscribe((questionSet) => {
        this.flashService.addFlash(...questionSet);
      });
  }
}

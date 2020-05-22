import { Component } from '@angular/core';
import { IFlash } from './flash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flashcards';

  currentIndex = 0;
  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: this.currentIndex++,
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: this.currentIndex++,
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: this.currentIndex++,
    },
  ];

  trackByFlashId(index, flash) {
    return flash.id;
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IFlash } from './flash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('flashForm', { static: true }) flashForm: NgForm;
  title = 'flashcards';

  currentIndex = 0;

  flash: IFlash = {
    question: '',
    answer: '',
    id: this.currentIndex++,
    show: false,
  };

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

  handleToggleCard(id: number): void {
    const flash = this.flashs.find((flash) => flash.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number): void {
    const flashIndex = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs.splice(flashIndex, 1);
  }

  handleEdit(id: number): void {
    console.log(id);
  }

  handleRememberedChange({ id, flag }): void {
    const flash = this.flashs.find((flash) => flash.id === id);
    flash.remembered = flag;
  }

  handleSubmit(): void {
    this.flashs.push({
      id: this.currentIndex++,
      ...this.flash,
    });
    this.handleClear();
  }

  handleClear(): void {
    this.flash = {
      question: '',
      answer: '',
      id: this.flash.id,
      show: false,
    };
    this.flashForm.reset();
  }
}

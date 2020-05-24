import { Injectable } from '@angular/core';
import { IFlash } from './flash.model';

@Injectable({
  providedIn: 'root',
})
export class FlashService {
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

  constructor() {}

  toggleFlash(id: number): void {
    const flash = this.flashs.find((flash) => flash.id === id);
    flash.show = !flash.show;
  }

  deleteFlash(id: number): void {
    const flashIndex = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs.splice(flashIndex, 1);
  }

  rememberedChanged(id: number, flag: 'correct' | 'incorrect'): void {
    const flash = this.flashs.find((flash) => flash.id === id);
    flash.remembered = flag;
  }

  addFlash(flash: IFlash): void {
    this.flashs.push(flash);
  }

  updateFlash(id: number, updatedFlash: IFlash): void {
    const flash = this.flashs.find((flash) => flash.id === id);
    flash.question = updatedFlash.question;
    flash.answer = updatedFlash.answer;
  }

  getFlash(id: number): IFlash {
    const flash = this.flashs.find((flash) => flash.id === id);
    return flash;
  }
}

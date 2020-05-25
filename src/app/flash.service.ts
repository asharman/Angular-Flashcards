import { Injectable } from '@angular/core';
import { IFlash } from './flash.model';
import { BehaviorSubject } from 'rxjs';

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

  flashs$ = new BehaviorSubject<IFlash[]>(this.flashs);

  constructor() {}

  flashsSplice(
    startingIndex: number,
    deleteCount: number,
    ...items: IFlash[]
  ): IFlash[] {
    return [
      ...this.flashs.slice(0, startingIndex),
      ...items,
      ...this.flashs.slice(startingIndex + deleteCount),
    ];
  }

  toggleFlash(id: number): void {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = this.flashsSplice(index, 1, {
      ...this.flashs[index],
      show: !this.flashs[index].show,
    });
    this.flashs$.next(this.flashs);
  }

  deleteFlash(id: number): void {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = this.flashsSplice(index, 1);
    this.flashs$.next(this.flashs);
  }

  rememberedChanged(id: number, flag: 'correct' | 'incorrect'): void {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = this.flashsSplice(index, 1, {
      ...this.flashs[index],
      remembered: flag,
    });
    this.flashs$.next(this.flashs);
  }

  addFlash(flash: IFlash): void {
    this.flashs = [...this.flashs.slice(0), flash];
    this.flashs$.next(this.flashs);
  }

  updateFlash(id: number, updatedFlash: IFlash): void {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    this.flashs = this.flashsSplice(index, 1, {
      ...this.flashs[index],
      ...updatedFlash,
    });
    this.flashs$.next(this.flashs);
  }

  getFlash(id: number): IFlash {
    const flash = this.flashs.find((flash) => flash.id === id);
    return flash;
  }
}

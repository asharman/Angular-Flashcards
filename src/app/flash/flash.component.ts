import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFlash } from '../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss'],
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash = {
    id: 1,
    question: 'What color is the sky?',
    answer: 'Blue',
    show: false,
  };

  @Output() onToggleCard = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onRememberedChange = new EventEmitter<Object>();

  constructor() {}

  ngOnInit(): void {}

  toggleCard(): void {
    this.onToggleCard.emit(this.flash.id);
  }

  editFlash(): void {
    this.onEdit.emit(this.flash.id);
  }

  deleteFlash(): void {
    this.onDelete.emit(this.flash.id);
  }

  markCorrect(): void {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct',
    });
  }

  markIncorrect(): void {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    });
  }
}

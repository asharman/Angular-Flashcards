import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}

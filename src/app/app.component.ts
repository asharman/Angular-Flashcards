import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IFlash } from './flash.model';
import { FlashService } from './flash.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private flashService: FlashService) {
    this.flashs = this.flashService.flashs;
  }

  @ViewChild('flashForm', { static: true }) flashForm: NgForm;
  title = 'flashcards';

  editing: boolean = false;
  editingId: number;
  currentIndex = 0;

  flash: IFlash = {
    question: '',
    answer: '',
    id: this.currentIndex++,
    show: false,
  };

  flashs: IFlash[];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.flashService.flashs$.subscribe((flashs) => {
      this.flashs = flashs;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number): void {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number): void {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: number): void {
    this.editing = true;
    this.editingId = id;
    this.flash = this.flashService.getFlash(id);
  }

  handleUpdate(): void {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel(): void {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

  handleRememberedChange({ id, flag }): void {
    this.flashService.rememberedChanged(id, flag);
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear(): void {
    this.flash = {
      question: '',
      answer: '',
      id: this.flashService.currentIndex++,
      show: false,
    };
    this.flashForm.reset();
  }
}

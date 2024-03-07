import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() title: string;
  @Input() content: string;
  isOpen: boolean = false;
  @Output() accordionOpened = new EventEmitter<AccordionComponent>();

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.accordionOpened.emit(this);
    }
  }
}

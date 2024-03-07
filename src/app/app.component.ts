import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren(AccordionComponent) accordions: QueryList<AccordionComponent>;

  accordionsData = [
    {
      title: 'Título 1',
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    voluptate sapiente consequatur deserunt porro recusandae suscipit
    enim tempora quasi fuga non fugiat, dolores minus quod blanditiis
    officia voluptatem nostrum eligendi.`,
    },
    {
      title: 'Título 2',
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    voluptate sapiente consequatur deserunt porro recusandae suscipit
    enim tempora quasi fuga non fugiat, dolores minus quod blanditiis
    officia voluptatem nostrum eligendi.`,
    },
    {
      title: 'Título 3',
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    voluptate sapiente consequatur deserunt porro recusandae suscipit
    enim tempora quasi fuga non fugiat, dolores minus quod blanditiis
    officia voluptatem nostrum eligendi.`,
    },
  ];

  closeOtherAccordions(currentAccordion: AccordionComponent) {
    this.accordions.forEach((accordion: AccordionComponent) => {
      if (accordion !== currentAccordion) {
        accordion.isOpen = false;
      }
    });
  }
}

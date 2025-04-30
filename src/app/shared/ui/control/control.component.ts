import { Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: 'w-full',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  title = input<string>();

  // Playing with accessing Host Elements Programmatically and adding event listeners to Host Elements
  private el = inject(ElementRef);

  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}

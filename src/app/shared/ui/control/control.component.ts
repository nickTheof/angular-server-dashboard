import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  inject,
  input,
} from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  title = input<string>();

  // Playing with accessing Host Elements Programmatically and adding event listeners to Host Elements
  private el = inject(ElementRef);

  // Playing with contentChild
  // @ContentChild('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  /*
The afterRender and afterNextRender functions let you register a render callback to be invoked after Angular has finished rendering all components on the page into the DOM.
These functions are different from the other lifecycle hooks described. Rather than a class method, they are standalone functions that accept a callback. The execution of render callbacks are not tied to any specific component instance, but instead an application-wide hook.
afterRender and afterNextRender must be called in an injection context, typically a component's constructor.
  */

  constructor() {
    // Listen all changes anywhere
    afterRender(() => {
      console.log('afterRender');
    });

    // Listen only next changes
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    console.log(this.control().nativeElement);
  }

  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
  }
}

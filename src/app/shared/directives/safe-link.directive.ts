import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink], button[appSafeLink]',
  host: {
    '(click)': 'onSafeLink()',
  },
})
export class SafeLinkDirective {
  constructor() {}

  onSafeLink() {
    const wantToProceed = window.confirm('Do you want to proceed?');
    if (wantToProceed) {
      console.log('User confirms to proceed');
      return;
    }
    console.log('User disagree to proceed');
  }
}

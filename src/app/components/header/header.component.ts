import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SafeLinkDirective } from '../../shared/directives/safe-link.directive';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, SafeLinkDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

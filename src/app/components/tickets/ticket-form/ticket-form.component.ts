import { Component } from '@angular/core';
import { ControlComponent } from '../../../shared/ui/control/control.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'app-ticket-form',
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css',
})
export class TicketFormComponent {}

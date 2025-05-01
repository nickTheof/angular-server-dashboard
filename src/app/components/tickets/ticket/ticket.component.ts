import { Component, input, output, signal } from '@angular/core';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { Ticket } from '../../../shared/interfaces/ticket';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal<boolean>(false);
  closedTicket = output();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((oldVal) => !oldVal);
  }

  onClose() {
    this.closedTicket.emit();
  }
}

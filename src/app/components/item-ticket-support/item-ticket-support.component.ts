import { Component } from '@angular/core';
import { TicketComponent } from '../tickets/ticket/ticket.component';

@Component({
  selector: 'app-item-ticket-support',
  imports: [TicketComponent],
  templateUrl: './item-ticket-support.component.html',
  styleUrl: './item-ticket-support.component.css',
  host: {
    class: 'flex flex-col gap-y-2 text-sm font-thin ',
  },
})
export class ItemTicketSupportComponent {}

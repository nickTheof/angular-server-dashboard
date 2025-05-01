import { Component } from '@angular/core';
import { TicketComponent } from '../tickets/ticket/ticket.component';
import { TicketFormComponent } from '../tickets/ticket-form/ticket-form.component';
import { Ticket } from '../../shared/interfaces/ticket';

@Component({
  selector: 'app-item-ticket-support',
  imports: [TicketComponent, TicketFormComponent],
  templateUrl: './item-ticket-support.component.html',
  styleUrl: './item-ticket-support.component.css',
  host: {
    class: 'min-w-[350px] grid grid-cols-2 gap-2',
  },
})
export class ItemTicketSupportComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      id: Math.random().toString(),
      request: ticketData.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}

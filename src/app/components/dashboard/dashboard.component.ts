import { Component } from '@angular/core';
import { ItemServerStatusComponent } from '../item-server-status/item-server-status.component';
import { ItemTicketSupportComponent } from '../item-ticket-support/item-ticket-support.component';
import { ItemTrafficComponent } from '../item-traffic/item-traffic.component';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardItemComponent,
    ItemServerStatusComponent,
    ItemTicketSupportComponent,
    ItemTrafficComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}

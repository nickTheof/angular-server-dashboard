import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-item-server-status',
  imports: [],
  templateUrl: './item-server-status.component.html',
  styleUrl: './item-server-status.component.css',
})
export class ItemServerStatusComponent {
  currentStatus = signal<string>('online');
}

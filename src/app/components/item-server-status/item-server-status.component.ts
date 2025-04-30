import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-item-server-status',
  imports: [],
  templateUrl: './item-server-status.component.html',
  styleUrl: './item-server-status.component.css',
})
export class ItemServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }
}

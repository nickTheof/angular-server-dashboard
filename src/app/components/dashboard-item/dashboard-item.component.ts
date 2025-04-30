import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'min-w-80 p-8 bg-gray-200 rounded-md shadow-md',
  },
})
export class DashboardItemComponent {
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}

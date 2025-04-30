import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'w-[400px] p-8 bg-gray-200 rounded-md shadow-md overflow-auto',
  },
})
export class DashboardItemComponent {
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}

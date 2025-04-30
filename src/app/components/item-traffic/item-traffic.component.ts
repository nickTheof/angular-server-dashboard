import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-item-traffic',
  imports: [],
  templateUrl: './item-traffic.component.html',
  styleUrl: './item-traffic.component.css',
  host: {
    class: 'flex flex-col gap-y-2 text-sm font-thin',
  },
})
export class ItemTrafficComponent {
  dummyTrafficData = signal<{ id: string; value: number }[]>([
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ]);
  get maxTraffic() {
    return Math.max(...this.dummyTrafficData().map((data) => data.value));
  }
}

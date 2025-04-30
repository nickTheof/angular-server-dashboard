import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-item-server-status',
  imports: [],
  templateUrl: './item-server-status.component.html',
  styleUrl: './item-server-status.component.css',
})
export class ItemServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    //Registers an "effect" that will be scheduled & executed whenever the signals that it reads changes.
    // effect() must be run in injection context, unless the injector option is manually specified.
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}

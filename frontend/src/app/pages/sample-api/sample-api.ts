import { Component, inject, OnInit, signal } from '@angular/core';
import { Api, SampleItem, HealthStatus } from '../../services/api';

@Component({
  selector: 'app-sample-api',
  imports: [],
  templateUrl: './sample-api.html',
  styleUrl: './sample-api.css',
})
export class SampleApi implements OnInit {
  private api = inject(Api);

  items = signal<SampleItem[]>([]);
  health = signal<HealthStatus | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.api.getHealth().subscribe({
      next: (data) => this.health.set(data),
    });

    this.api.getSampleData().subscribe({
      next: (data) => {
        this.items.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load data. Is the backend running?');
        this.loading.set(false);
      },
    });
  }
}

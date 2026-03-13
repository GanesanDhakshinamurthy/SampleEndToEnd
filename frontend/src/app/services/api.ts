import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SampleItem {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface HealthStatus {
  status: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  getHealth(): Observable<HealthStatus> {
    return this.http.get<HealthStatus>('/api/health');
  }

  getSampleData(): Observable<SampleItem[]> {
    return this.http.get<SampleItem[]>('/api/sample-data');
  }
}

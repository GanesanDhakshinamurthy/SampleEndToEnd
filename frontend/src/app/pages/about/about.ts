import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  techs = [
    { name: 'Angular', description: 'Modern frontend framework with standalone components and signals.' },
    { name: 'Spring Boot', description: 'Java-based backend framework for building production-ready REST APIs.' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development.' },
    { name: 'Docker', description: 'Containerization platform with multi-stage builds for small, secure images.' },
    { name: 'Kubernetes (k3s)', description: 'Lightweight container orchestration for production deployments.' },
    { name: 'GitHub Actions', description: 'CI/CD pipeline for automated build, test, and deploy workflows.' },
  ];
}

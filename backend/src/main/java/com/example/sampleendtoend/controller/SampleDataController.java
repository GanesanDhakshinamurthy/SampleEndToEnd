package com.example.sampleendtoend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SampleDataController {

    public record SampleItem(int id, String name, String description, String category) {}

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
                "status", "UP",
                "timestamp", Instant.now().toString()
        );
    }

    @GetMapping("/sample-data")
    public List<SampleItem> sampleData() {
        return List.of(
                new SampleItem(1, "Spring Boot", "A powerful Java framework for building production-ready applications", "Technology"),
                new SampleItem(2, "Angular", "A platform for building mobile and desktop web applications", "Technology"),
                new SampleItem(3, "Quantum Computing", "Computing using quantum-mechanical phenomena such as superposition", "Science"),
                new SampleItem(4, "Material Design", "A design system created by Google to help teams build digital experiences", "Design"),
                new SampleItem(5, "Machine Learning", "A subset of AI that enables systems to learn from data", "Science"),
                new SampleItem(6, "UX Research", "The systematic study of target users and their requirements", "Design")
        );
    }
}

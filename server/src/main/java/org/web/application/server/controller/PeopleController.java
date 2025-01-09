package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.service.PeopleService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/people")
@CrossOrigin("http://localhost:3000")
public class PeopleController {
    private final PeopleService peopleService;

    @GetMapping("/list")
    public ResponseEntity<?> getPeopleList() {
        return ResponseEntity.ok(peopleService.getPeopleList());
    }
}

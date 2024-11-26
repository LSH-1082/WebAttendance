package org.web.application.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.DTO.MainDTO;

@RestController
@RequestMapping("/main")
public class MainController {
    @GetMapping("/yearMonth")
    public ResponseEntity<?> yearMonth(@RequestBody MainDTO mainDTO) {
    }

    @GetMapping("/duration")
    public ResponseEntity<?> duration(@RequestBody MainDTO mainDTO) {

    }
}

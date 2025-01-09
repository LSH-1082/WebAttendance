package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.DTO.HomeSearchDTO;
import org.web.application.server.service.HomeService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/home")
@CrossOrigin("http://localhost:3000")
public class HomeController {
    private final HomeService mainService;

    @GetMapping("/yearMonth")
    public ResponseEntity<?> getYearMonth(@RequestParam int year, @RequestParam int month) {
        return ResponseEntity.ok(mainService.searchByYearMonth(year, month));
    }
}

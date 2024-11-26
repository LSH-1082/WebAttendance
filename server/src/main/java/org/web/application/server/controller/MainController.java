package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.DTO.MainSearchDTO;
import org.web.application.server.service.MainService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/main")
public class MainController {
    private final MainService mainService;

    @GetMapping("/yearMonth")
    public ResponseEntity<?> getYearMonth(@RequestBody MainSearchDTO mainSearchDTO) {
        return ResponseEntity.ok(mainService.searchByYearMonth(mainSearchDTO));
    }

    @GetMapping("/duration")
    public ResponseEntity<?> getDuration(@RequestBody MainSearchDTO mainSearchDTO) {
        return ResponseEntity.ok(mainService.searchByDuration(mainSearchDTO));
    }
}

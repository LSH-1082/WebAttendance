package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.web.application.server.DTO.HomeSearchDTO;
import org.web.application.server.model.HomeResultModel;
import org.web.application.server.repository.HomeRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeService {
    private final HomeRepository mainRepository;

    public List<HomeResultModel> searchByYearMonth(int year, int month) {
        String yearMonth = year + "-" + String.format("%02d", month);
        return mainRepository.findByYearMonth(yearMonth);
    }
}

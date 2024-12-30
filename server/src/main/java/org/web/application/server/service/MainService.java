package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.web.application.server.DTO.MainSearchDTO;
import org.web.application.server.model.MainResultModel;
import org.web.application.server.repository.MainRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainService {
    private final MainRepository mainRepository;

    public List<MainResultModel> searchByDuration(MainSearchDTO mainSearchDTO) {
        String start = mainSearchDTO.getStartYear() + "-"
                        + mainSearchDTO.getStartMonth() + "-"
                        + mainSearchDTO.getStartDay();

        String end = mainSearchDTO.getEndYear() + "-"
                        + mainSearchDTO.getEndMonth() + "-"
                        + mainSearchDTO.getEndDay();
        return mainRepository.findByDuration(start, end);
    }

    public List<MainResultModel> searchByYearMonth(int year, int month) {
        String yearMonth = year + "-" + month;
        return mainRepository.findByYearMonth(yearMonth);
    }
}

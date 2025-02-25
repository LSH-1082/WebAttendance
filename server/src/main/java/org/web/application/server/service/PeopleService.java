package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.web.application.server.model.PeopleResultModel;
import org.web.application.server.model.PeopleWorkTimeResultModel;
import org.web.application.server.repository.PeopleRepository;

import java.time.YearMonth;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PeopleService {
    private final PeopleRepository peopleRepository;

    public List<PeopleResultModel> getPeopleList(){
        ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));
        String yearMonth = zonedDateTime.getYear() + "-" + String.format("%02d", zonedDateTime.getMonthValue());
        return peopleRepository.getPeopleList(yearMonth);
    }

    public List<PeopleWorkTimeResultModel> getWorkTimeData(String userId){
        YearMonth currentMonth = YearMonth.now();
        int lastDay = currentMonth.lengthOfMonth();
        String startDate = currentMonth.atDay(1).toString();
        String endDate = currentMonth + "-" + lastDay;
        return peopleRepository.getWorkTimeData(userId, startDate, endDate);
    }
}

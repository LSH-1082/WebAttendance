package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.web.application.server.repository.ScheduledRepository;

import java.sql.Timestamp;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ScheduledExecutorService {
    private final ScheduledRepository scheduledRepository;

    @Scheduled(cron = "0 0 0 * * *")
    public void scheduledTaskAtMidnight() {
        ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));
        String formatDate = zonedDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        ZonedDateTime koreaMidnight = zonedDateTime.withHour(0).withMinute(0).withSecond(0).withNano(0);
        Timestamp midnightTimestamp = Timestamp.valueOf(koreaMidnight.toLocalDateTime());
        System.out.println(formatDate + "    자정 함수 실행");
        List<String> beforeLeaveUserIdList = scheduledRepository.getBeforeLeaveUserId();
        scheduledRepository.updateLeaveTime(midnightTimestamp);
        for(String userId : beforeLeaveUserIdList) {
            scheduledRepository.insertAttendanceTime(userId, midnightTimestamp);
        }
    }
}

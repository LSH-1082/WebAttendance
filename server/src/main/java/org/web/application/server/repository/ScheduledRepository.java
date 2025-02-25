package org.web.application.server.repository;

import org.apache.ibatis.annotations.Mapper;

import java.sql.Timestamp;
import java.util.List;

@Mapper
public interface ScheduledRepository {
    void updateLeaveTime(Timestamp time);
    void insertAttendanceTime(String userId, Timestamp time);
    List<String> getBeforeLeaveUserId();
}

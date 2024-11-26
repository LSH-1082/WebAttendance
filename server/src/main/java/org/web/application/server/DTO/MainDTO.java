package org.web.application.server.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Builder
@Getter
@Setter
public class MainDTO {
    private int year;
    private int month;
    private int day;
    private Timestamp attendanceTime;
    private Timestamp leaveTime;
}

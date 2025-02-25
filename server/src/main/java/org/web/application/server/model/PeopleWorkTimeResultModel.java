package org.web.application.server.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Builder
@Getter
@Setter
public class PeopleWorkTimeResultModel {
    private Timestamp attendance_time;
    private Timestamp leave_time;
}

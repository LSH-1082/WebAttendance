package org.web.application.server.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@Builder
public class MainResultModel {
    private String avatarUrl;
    private String name;
    private Timestamp attendanceTime;
    private Timestamp leaveTime;
}

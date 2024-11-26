package org.web.application.server.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@Builder
public class MainResultModel {
    private String user_id;
    private String name;
    private String state;
    private String imgUrl;
    private Timestamp attendance_time;
    private Timestamp leave_time;
}

package org.web.application.server.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PeopleResultModel {
    private String user_id;
    private String name;
    private String state;
    private String imgUrl;
    private int month_work_time;
    private int total_work_time;
}

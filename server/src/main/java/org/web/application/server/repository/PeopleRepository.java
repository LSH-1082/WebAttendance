package org.web.application.server.repository;

import org.apache.ibatis.annotations.Mapper;
import org.web.application.server.model.PeopleResultModel;
import org.web.application.server.model.PeopleWorkTimeResultModel;

import java.util.List;

@Mapper
public interface PeopleRepository {
    List<PeopleResultModel> getPeopleList(String yearMonth);
    List<PeopleWorkTimeResultModel> getWorkTimeData(String userId, String startDate, String endDate);
}

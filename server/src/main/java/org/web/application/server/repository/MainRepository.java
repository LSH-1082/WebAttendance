package org.web.application.server.repository;

import org.apache.ibatis.annotations.Mapper;
import org.web.application.server.model.MainResultModel;

import java.sql.Timestamp;
import java.util.List;

@Mapper
public interface MainRepository {
    List<MainResultModel> findByDuration(String start, String end);
    List<MainResultModel> findByYearMonth(String yearMonth);
}

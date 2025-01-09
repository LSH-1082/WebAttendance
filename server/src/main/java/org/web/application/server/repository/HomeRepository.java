package org.web.application.server.repository;

import org.apache.ibatis.annotations.Mapper;
import org.web.application.server.model.HomeResultModel;

import java.util.List;

@Mapper
public interface HomeRepository {
    List<HomeResultModel> findByYearMonth(String yearMonth);
}

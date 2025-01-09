package org.web.application.server.repository;

import org.apache.ibatis.annotations.Mapper;
import org.web.application.server.model.PeopleResultModel;

import java.util.List;

@Mapper
public interface PeopleRepository {
    List<PeopleResultModel> getPeopleList(String yearMonth);
}

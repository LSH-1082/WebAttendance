import instance from "./instance";

const path = "/people"

export const getPeopleList = () => instance.get(path + "/list");
export const getPeopleData = (userId) => instance.get(path + "/workTimeData", {params: {'userId': userId}});
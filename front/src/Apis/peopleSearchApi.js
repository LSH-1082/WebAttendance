import instance from "./instance";

const path = "/people"

export const getPeopleList = () => instance.get(path + "/list");
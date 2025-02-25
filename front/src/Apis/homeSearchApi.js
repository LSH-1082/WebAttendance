import instance from "./instance";

const path = "/home"

export const searchByYearMonth = date => instance.get(path + "/yearMonth", {params: date});
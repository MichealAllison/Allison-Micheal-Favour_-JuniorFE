import axios, { AxiosResponse } from "axios";
import { IOptions, IQuery, RocketResponse } from "../types/data";

export const fetchRocketsApi = async (
  query: IQuery,
  options: IOptions
): Promise<AxiosResponse<RocketResponse>> => {
  return axios.post<RocketResponse>(
    "https://api.spacexdata.com/v4/rockets/query",
    {
      query,
      options,
    }
  );
};

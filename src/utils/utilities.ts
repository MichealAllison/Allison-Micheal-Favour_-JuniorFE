import dayjs from "dayjs";
import { IQuery } from "../types/data";

type MapQueryArgs = {
  status: string;
  type: string;
  date: Date | null;
};

export const mapQuery = ({ status, type, date }: MapQueryArgs): IQuery => {
  return {
    active: (!!status as boolean)
      ? status === "active"
        ? true
        : false
      : undefined,
    type: (!!type as boolean) ? type : undefined,
    first_flight: date ? dayjs(date).format("YYYY-MM-DD") : undefined,
  };
};

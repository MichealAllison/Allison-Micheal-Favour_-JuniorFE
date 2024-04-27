import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import SelectInput from "../../ui/SelectInput";
import { setQuery, setRockets } from "../../../redux/rockets/rocket.slice";
import DateInput from "../../ui/DateInput";
import { mapQuery } from "../../../utils/utilities";
import { fetchRocketsApi } from "../../../api/rocket.api";
import RightArrow from "../../../assets/icons/rightArrow";

const statusOptions = [
  { key: "active", value: "Active" },
  { key: "inactive", value: "Inactive" },
];

const typeOptions = [
  { key: "rocket", value: "Rocket" },
  { key: "capsules", value: "Capsules" },
];

const SearchSection = () => {
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const dispatch = useDispatch();

  const fetchRockets = useCallback(async () => {
    // transform query
    const query = mapQuery({ status, type, date: startDate });
    dispatch(setQuery(query));

    const result = await fetchRocketsApi(query, { limit: 8, page: 1 });

    dispatch(setRockets(result.data));
  }, [dispatch, startDate, status, type]);

  useEffect(() => {
    fetchRockets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#511526] p-5 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-4xl text-white font-semibold text-center mb-6">
        Search Rockets and Capsules{" "}
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <SelectInput
          label="Filter by Status"
          placeholder="Select status"
          options={statusOptions}
          value={status}
          onChange={(text) => setStatus(text)}
        />
        <DateInput
          label="Filter by launch date"
          value={startDate}
          onChange={setStartDate}
        />
        <SelectInput
          label="Filter by Type"
          placeholder="Select type"
          options={typeOptions}
          value={type}
          onChange={(text) => setType(text)}
        />
      </div>
      <button
        className="flex items-center bg-white rounded-lg text-lg px-12 py-3 ml-auto mr-auto mt-6"
        onClick={fetchRockets}
      >
        Search
        <RightArrow className="ml-4" />
      </button>
    </div>
  );
};

export default SearchSection;

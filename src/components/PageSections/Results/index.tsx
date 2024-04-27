import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import ResultCard from "../../ui/ResultCard";
import RocketModal from "../../RocketModal";
import type { RootState } from "../../../redux/store";
import { fetchRocketsApi } from "../../../api/rocket.api";
import { setRockets } from "../../../redux/rockets/rocket.slice";
import Arrow from "../../../assets/icons/arrow";
import { IRocketResult } from "../../../types/data";

const Results = () => {
  const [itemsPerPage] = useState<number>(8);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeResult, setActiveResult] = useState<IRocketResult | null>(null);

  const { results, totalPages } = useSelector(
    (state: RootState) => state.rocket
  );
  const query = useSelector((state: RootState) => state.rocket.query);

  const dispatch = useDispatch();

  const fetchRockets = async (page: number) => {
    const result = await fetchRocketsApi(query || {}, {
      limit: itemsPerPage,
      page,
    });

    dispatch(setRockets(result.data));
  };

  const handlePageClick = (event: { selected: number }) => {
    fetchRockets(event.selected);
  };

  const handleResultClick = (result: IRocketResult) => {
    console.log(result);
    setActiveResult(result);
    setModalOpen(true);
  };

  return (
    <div className="display_grid">
      <h2>Results - Rockets / Capsules</h2>
      <div className="grid">
        <div className="row1">
          {results.map((result) => (
            <ResultCard
              key={result.id}
              name={result.name}
              active={result.active}
              flickr_images={result.flickr_images}
              first_flight={result.first_flight}
              onCardClick={() => handleResultClick(result)}
            />
          ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <div className="flex items-center text-base">
              <span className="mr-2 text-white hidden sm:block">Next</span>{" "}
              <Arrow color="white" />
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel={
            <div className="flex items-center text-base">
              <Arrow color="white" className="rotate-180" />{" "}
              <span className="ml-2 text-white hidden sm:block">Previous</span>
            </div>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center md:justify-end"
          pageClassName="mx-1"
          pageLinkClassName="w-10 h-10 p-0 flex justify-center items-center text-base text-white bg-transparent border border-red-200"
          activeLinkClassName="bg-[#511526] border-[#511526]"
          previousClassName="m-0"
          nextLinkClassName="py-0 px-4 h-10 w-fit bg-transparent border border-red-200 text-white"
          previousLinkClassName="py-0 px-4 h-10 w-fit bg-transparent border border-red-200 text-white"
          disabledLinkClassName="border-neutral-700 cursor-not-allowed hover:bg-transparent"
        />
      </div>
      <RocketModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={activeResult}
      />
    </div>
  );
};

export default Results;

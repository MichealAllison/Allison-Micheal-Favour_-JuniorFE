import React from "react";
import { IRocketResult } from "../../../types/data";
import Tag from "../Tag";

export interface ResultCardProps
  extends Pick<
    IRocketResult,
    "name" | "active" | "flickr_images" | "first_flight"
  > {
  onCardClick: () => void;
}

const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { name, active, flickr_images, first_flight, onCardClick } = props;

  return (
    <div className="card cursor-pointer" onClick={onCardClick}>
      <img
        src={flickr_images[0] || ""}
        alt="img"
        className="w-[331px] h-[217px] rounded-lg"
      />
      <div className="card_content">
        <div className="title">
          <h4>{name}</h4>
          <Tag active={active} />
        </div>
        <h5>{first_flight}</h5>
        <h5>Rocket</h5>
      </div>
    </div>
  );
};

export default ResultCard;

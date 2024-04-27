import React from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Tag from "../ui/Tag";
import { IRocketResult } from "../../types/data";

export interface RocketModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IRocketResult | null;
}

const RocketModal: React.FC<RocketModalProps> = (props) => {
  const { isOpen, onClose, data } = props;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{
        modal: "bg-[#171717] rounded-2xl",
        closeIcon: "close-icon",
      }}
    >
      <div className="flex flex-col sm:flex-row mt-6">
        <img
          src={data?.flickr_images[0]}
          className="w-fit sm:w-[196px] h-md sm:h-[339px] bg-white rounded-2xl object-cover"
        />
        <div className="sm:pl-6 mt-6 sm:mt-0">
          <h1 className="text-3xl text-white leading-10">{data?.name}</h1>
          <p className="text-xl leading-10">{data?.type}</p>
          <Tag active={!!data?.active} />
          <p className="text-xl leading-10">{data?.first_flight}</p>
          <p className="text-xl leading-10">{data?.company}</p>
          <p className="max-w-md text-lg">{data?.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default RocketModal;

import React from "react";
import Avatar from "../../public/avatar.jpg";
import Dog1 from "../../public/dog-image-1.jpg";
import Dog2 from "../../public/dog-image-2.jpg";
import Dog3 from "../../public/dog-image-3.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEllipsisV,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import LeftMsg from "./leftMsg";
import RightMsg from "./rightMsg";
import Radio from "./radio";

const CellPhone: React.FC = () => {
  return (
    <div className="bg-white max-w-96 mx-auto p-4 rounded-3xl">
      <div className="bg-light-grayish-violet rounded-t-3xl rounded-b-3xl">
        <div className="bg-gradient-to-r from-light-violet to-light-magenta rounded-t-3xl rounded-b-md">
          <div className="bg-white w-1/2 h-6 rounded-b-3xl mx-auto"></div>
          <div className=" text-white flex items-center w-full pt-[3%] pb-[5%] px-[3%] justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faAngleLeft} />
              <Image
                src={Avatar}
                alt="Avatar"
                width={40}
                className="rounded-full border-2 border-white"
              />
              <div>
                <p className="font-medium">Samuel Green</p>
                <span className="text-xs text-pale-violet">
                  Available to Walk
                </span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
        </div>
        <LeftMsg text={"That sounds great. I’d be happy with that."} />
        <LeftMsg
          text={"Could you send over some pictures of your dog, please?"}
        />
        <div className="flex gap-3 justify-end w-full pr-3">
          <Image src={Dog1} alt={"Dog"} width={60} className="rounded-lg" />
          <Image
            src={Dog2}
            alt={"Dog lying down"}
            width={60}
            className="rounded-lg"
          />
          <Image
            src={Dog3}
            alt={"Dog holding a stick in its mouth"}
            width={60}
            className="rounded-lg"
          />
        </div>
        <RightMsg text={"Here are a few pictures. She’s a happy girl!"} />
        <div className="bg-white text-desaturated-dark-violet shadow-rightMessage rounded-t-2xl rounded-bl-2xl rounded-br-md p-2 my-4 w-36 ml-auto mr-3">
          <div>
            <p>Can you make it?</p>
          </div>
        </div>
        <LeftMsg
          text={
            "She looks so happy! The time we discussed works. How long shall I take her out for?"
          }
        />
        <Radio text="30 minute walk" price="$29" />
        <Radio text="1 hour walk" price="$49" />
        <div className="p-3">
          <div className="p-2 bg-white rounded-full flex justify-between">
            <input
              type="text"
              placeholder="type a message..."
              className="outline-none"
            />
            <button className="bg-very-dark-desaturated-violet py-1 px-3 rounded-full">
              <FontAwesomeIcon icon={faAngleRight} style={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellPhone;

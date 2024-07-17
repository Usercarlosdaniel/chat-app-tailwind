import React from "react";

interface RightMsgProps {
  text:string,
}

const RightMsg: React.FC<RightMsgProps> = ({text}) => {
  return (
    <div className="bg-white text-desaturated-dark-violet shadow-rightMessage rounded-t-2xl rounded-bl-2xl rounded-br-md p-2 my-4 w-60 ml-auto mr-3">
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default RightMsg;

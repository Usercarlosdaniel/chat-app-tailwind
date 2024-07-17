import React from "react";

interface LeftMsgProps {
  text: string,
}

const LeftMsg: React.FC<LeftMsgProps> = ({text}) => {
  return (
    <div className="bg-pale-violet text-moderate-violet rounded-t-2xl rounded-br-2xl rounded-bl-md p-2 my-4 w-60 ml-3">
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default LeftMsg;

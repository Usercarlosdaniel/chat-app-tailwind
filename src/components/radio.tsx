import React from "react";

interface radioProps {
  text: string;
  price: string;
}

const Radio: React.FC<radioProps> = ({ text, price }) => {
  return (
    <div className="bg-gradient-to-r from-light-magenta to-light-violet text-white flex justify-between p-2 rounded-r-2xl rounded-tl-2xl rounded-bl-md w-60 ml-3 mb-3 accent-very-light-magenta">
      <div className="flex items-center">
        <input
          type="radio"
          name="walk"
          className="size-4 appearance-none border relative cursor-pointer rounded-[50%] checked:bg-light-magenta checked:border-white checked:before:absolute checked:before:content-[''] checked:before:top-1/2 checked:before:left-1/2 checked:before:size-2 checked:before:bg-white checked:before:rounded-[50%] checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 border-solid border-grayish-blue outline-very-light-magenta mr-3"
        />
        {text}
      </div>
      <p>{price}</p>
    </div>
  );
};

export default Radio;

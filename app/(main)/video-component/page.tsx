import React from "react";
import ReactPlayerComponent from "./(components)/react-player";

const CustomVideoPlayer = () => {
  return (
    <div className="w-full ">
      <div className="flex h-full justify-center mt-8 lg:mt-20">
        <div className="border w-[90%] lg:w-1/2 h-[200px] md:h-[400px] lg:h-[300px]">
          <ReactPlayerComponent light controls />
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;

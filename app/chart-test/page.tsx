import React from "react";
import LinearGauge from "./(component)/main-chart";

const ChartTestPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full pt-28">
        <div className="w-[500px] overflow-hidden">
          <LinearGauge />
        </div>
      </div>
    </div>
  );
};

export default ChartTestPage;

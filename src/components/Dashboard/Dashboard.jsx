import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border bg-gradient-to-b from-[#5e626c] to-[#111827] flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {/* {[...Array(2)].map((_, i) => (
            <div
              key={`first-array-${i}`}
              className="h-20 w-full rounded-lg bg-gradient-to-b from-[#5e626c] to-[#111827] animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...Array(2)].map((_, i) => (
            <div
              key={`second-array-${i}`}
              className="h-full w-full rounded-lg bg-gradient-to-b from-[#5e626c] to-[#111827] animate-pulse"
            ></div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

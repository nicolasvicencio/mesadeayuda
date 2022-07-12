import React from "react";

export default function MainItem({ type, value }) {
  return (
    <div className="flex p-4">
      <div className="w-36">
        <div className="">{type}</div>
      </div>
      <div className="bg-zinc-100 px-20">{value}</div>
    </div>
  );
}


import React from "react";
import Button from "./Button";

export default function MainItemArea({ type, btn , disabled}) {
  return (
    <div className="flex justify-between p-4 ">
      <div className="w-60 ">{type}</div>
      <textarea
        expanded="false"
        disabled={disabled}
        className="border w-screen h-52 text-slate-600 text-sm p-2  bg-zinc-100"
      ></textarea>
      <div>
        <Button title={btn} color="red" />
      </div>
    </div>
  );
}

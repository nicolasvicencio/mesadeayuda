import React from "react";

export default function Button({ title, color }) {
  let colorBtn = color
  return (
    <input
      className={`bg-${colorBtn}-600 w-28 px-2 ml-10 text-white rounded-sm hover:bg-${colorBtn}-700 btn`}
      type="button"
      value={title}
    />
  );
}

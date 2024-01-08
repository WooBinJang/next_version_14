"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}
const error = ({ error, reset }: Props) => {
  console.log("Error : " + error);

  return (
    <div>
      error
      <button
        className="btn"
        onClick={() => {
          reset();
        }}
      >
        Retry
      </button>
    </div>
  );
};

export default error;

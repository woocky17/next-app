"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  //* You can use SENTRY to do a log for de errors
  console.log("Error ", error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;

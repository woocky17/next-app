"use client";
import React from "react";

const AddToCard = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log("Add to Cart");
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCard;

"use client";
import React from "react";

const AddToCard = () => {
  return (
    <button
      onClick={() => {
        console.log("Add to Cart");
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCard;

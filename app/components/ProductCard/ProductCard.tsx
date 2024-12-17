//* "use client"; Esto combierte el componente en un comp cliente de default es un comp server
import React from "react";
import AddToCard from "../AddToCard";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-900">
      <AddToCard />
    </div>
  );
};

export default ProductCard;

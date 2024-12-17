//* "use client"; Esto combierte el componente en un comp cliente de default es un comp server
import React from "react";
import AddToCard from "../AddToCard";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCard />
    </div>
  );
};

export default ProductCard;

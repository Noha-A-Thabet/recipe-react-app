import React from "react";
import style from "../src/component/Recipe.module.css";

const Recipe = ({ key, category, thumb, description, inputHandler }) => {
  return (
    <section id={key} className={style.recipe}>
      <h1>{category}</h1>
      <img src={thumb} alt="food thumb" className={style.image} />
      <p>{description}</p>
    </section>
  );
};

export default Recipe;

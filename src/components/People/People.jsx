import React from "react";
import s from "./style.module.css";

const People = ({ link, name }) => {
  return (
    <div className={s.one_people}>
      <img src={link} alt={name} />
      <p className={s.name}>{name}</p>
    </div>
  );
};

export default People;

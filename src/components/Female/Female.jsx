import React from "react";
import { useSelector } from "react-redux";
import People from "../People/People";
import s from "./style.module.css";

const Female = () => {
  const people = useSelector((state) => state);
  const women = people.filter((woman) => woman.sex === "female");
  return (
    <div className={s.cont_female}>
      <p className={s.p_women}>Woman</p>
      <div className={s.div_female}>
        {women.map((woman) => (
          <People key={woman.id} {...woman} />
        ))}
      </div>
    </div>
  );
};

export default Female;

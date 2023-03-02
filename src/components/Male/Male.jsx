import React from "react";
import { useSelector } from "react-redux";
import People from "../People/People";
import s from "./style.module.css";

const Male = () => {
  const people = useSelector((state) => state);
  const man = people.filter((men) => men.sex === "male");

  //console.log(people);
  return (
    <div className={s.cont_male}>
      <p className={s.p_man}>Man</p>
      <div className={s.div_male}>
        {man.map((men) => (
          <People key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default Male;

/* body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgb(69, 68, 68);
}

h2, body {
    display: flex;
    justify-content: center;
}

.cont_male, .cont_female  {
    background-color: rgba(44, 44, 74, 0.902);
}
.p_man, .p_women, .name {
    color: white;
    margin: 5px;
}

.cont_male, .one_people, .cont_female{
    display: flex;
    margin: 10px 5px;
    padding: 5px;
    border-radius: 5px;
}
.cont_male, .cont_female {
    flex-direction: column;
}
.one_people {
    flex-direction: column;
    background-color:rgb(165, 166, 167);
}

img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.div_male, .div_female {
    display: flex;
    
} */

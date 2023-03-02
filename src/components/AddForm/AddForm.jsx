import React from "react";
import { useDispatch } from "react-redux";
import { addPeopleAction } from "../../store/reducer/peopleReduser";
import s from "./style.module.css";

const AddForm = () => {

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, link, sex} = e.target;
    dispatch(addPeopleAction(name.value, link.value, sex.value));
    name.value = '';
    link.value = '';
    sex.value = '';
  }
 

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name " />
      <input type="text" name="link" placeholder="Link to avatar" />
      <select name="sex" id="select">
        <option value="">Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button className={s.btn_add}>Add</button>
    </form>
  );
};

export default AddForm;

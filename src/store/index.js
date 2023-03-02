import {peopleReduser} from "./reducer/peopleReduser";
import {createStore} from "redux"


export const store = createStore(peopleReduser);
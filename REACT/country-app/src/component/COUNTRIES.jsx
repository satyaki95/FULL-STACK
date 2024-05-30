import React from "react";
import { v4 as uuidv4 } from "uuid";
import COUNTRY from "./COUNTRY";
import style from "./countries.module.css";

const COUNTRIES = (props) => {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const newCountry = { country, id: uuidv4() };

        return (
          <COUNTRY
            {...newCountry}
            key={newCountry.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
};

export default COUNTRIES;

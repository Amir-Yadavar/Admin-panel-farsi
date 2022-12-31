import React from "react";
import "./UsersMain.css";
import ChartUser from "../Charts/ChartUser.jsx/ChartUser";

export default function UsersMain({ id, name, chart, openModal }) {
  return (
    <section className="container-user-main">
      <section>
        <section>
          <h5>{id} -</h5>
          <h4>{name}</h4>
        </section>
        <section>
          <h5>فروش سه ماهه اخیر</h5>
        </section>
      </section>

      <section>
        <ChartUser chart={chart} />
      </section>

      <section>
        <button className="btn-product" onClick={openModal}>
          اطلاعات
        </button>
      </section>
    </section>
  );
}

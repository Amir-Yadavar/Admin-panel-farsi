import React from "react";
import "./OffsBox.css";

export default function OffsBox({ title, img, start, end, percent }) {
  return (
    <section className="offs-box">
      <section>
        <h4>نام کالا</h4>
        <h4>{title}</h4>
      </section>
      <section>
        <img src={img} alt="" />
        <section>
          <h4>درصد تفیف</h4>
          <div>{percent} %</div>
        </section>
      </section>

      <section>
        <section>
          <div>تاریخ شروع تخفیف</div>
          <div>{start}</div>
        </section>
        <section>
          <div>تاریخ پایان تخفیف</div>
          <div>{end}</div>
        </section>
      </section>
    </section>
  );
}

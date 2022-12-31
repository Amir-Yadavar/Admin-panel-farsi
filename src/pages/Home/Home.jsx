import React from "react";
import "./Home.css";
import ChartHome from "../../Components/Charts/ChartsHome/ChartHome";

export default function Home() {
  return (
    <section className="container-home">
      <section>
        <h3>صفحه اصلی</h3>
        <h4> سلام به پنل کاربری خوش آمدید</h4>
        <h2>میزان فروش در ۶ ماهه اخیر</h2>
        <div>
          <div><p>فروش شما در سال قبل </p><span></span></div>
          <div><p>فروش شما درامسال </p><span></span></div>
        </div>
      </section>
      <section>
        <ChartHome />
      </section>
    </section>
  );
}

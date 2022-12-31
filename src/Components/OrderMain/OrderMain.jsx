import React from "react";
import "./OrderMain.css";

export default function OrderMain({ name, title, color, count, price,removeOrder }) {
  return (
    <section className="order-box">
      <section>
        <h3>نام کاربر</h3>
        <h3>{name}</h3>
      </section>
      <section>
        <h3>شماره تماس</h3>
        <h3>09101234567</h3>
      </section>
      <section>
        <h3>نام محصول</h3>
        <h3>{title}</h3>
      </section>
      <section>
        <h3>رنگ</h3>
        <h3>{color}</h3>
      </section>
      <section>
        <h3>تعداد محصول</h3>
        <h3>{count}</h3>
      </section>
      <section>
        <h3>مبلغ کل</h3>
        <h3>{price}</h3>
      </section>
      <section>
        <p>
          تهران . منطقه فلان .خیابان اول . کوچه دوم . خونه دست راست . در بزنید
        </p>
      </section>
      <section>
        <p>چاپ کردن این فاکتور</p>
        <button className="btn-product btn-blue">چاپ</button>
      </section>
      <section>
        <p>پس از ارسال کالا ،این سفارش را حذف کنید</p>
        <button className="btn-product" onClick={removeOrder}>حذف</button>
      </section>
    </section>
  );
}

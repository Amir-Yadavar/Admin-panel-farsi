import React from "react";
import "./TicketMain.css";

export default function TicketMain({id , name , desc,removeTicket,openTicket}) {
  return (
    <section className="container-ticket-main">
      <section>
        <section>{id}</section>
        <section>{name}</section>
      </section>
      <section>{desc}</section>
      <section>
        <button className="btn-product" onClick={openTicket}>مشاهده</button>
        <button className="btn-product" onClick={removeTicket}>حذف</button>
      </section>
    </section>
  );
}

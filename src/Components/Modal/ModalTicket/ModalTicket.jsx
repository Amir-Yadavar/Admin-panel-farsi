import React from "react";
import ReactDOM from "react-dom";

import "./ModalTicket.css";

export default function ModalTicket({ name, desc, onCloseModalticket }) {
  return ReactDOM.createPortal(
    <section className="modal-parent">
      <section className="container-modal-ticket">
        <h2>تیکت {name}</h2>
        <h2>{desc}</h2>

        <button className="btn-product" onClick={onCloseModalticket}>
          بستن
        </button>
      </section>
    </section>,
    document.getElementById("modal-row")
  );
}

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./UserModal.css";

export default function UserModal({ name, age, tel, city, closeModalInfo }) {
  useEffect(() => {
    const keyCheck = (event) => {
      if (event.keyCode === 27) {
        closeModalInfo();
      }
    };
    window.addEventListener("keyup", keyCheck);
    return () => window.removeEventListener("keyup", keyCheck);
  });

  return ReactDOM.createPortal(
    <section className="modal-parent">
      <section className="container-modal-info">
        <h2>اطلاعات کاربر</h2>
        <div>
          <h3>نام کاربر</h3>
          <h4>{name}</h4>
        </div>
        <div>
          <h3>سن کاربر</h3>
          <h4>{age}</h4>
        </div>
        <div>
          <h3>تلفن کاربر</h3>
          <h4>{tel}</h4>
        </div>
        <div>
          <h3>شهر کاربر</h3>
          <h4>{city}</h4>
        </div>
        <div>
          <button
            className="btn-product"
            onClick={() => closeModalInfo()}
            onKeyUp={(e) => closeModalInfo(e)}
          >
            بستن
          </button>
        </div>
      </section>
    </section>,
    document.getElementById("modal-row")
  );
}

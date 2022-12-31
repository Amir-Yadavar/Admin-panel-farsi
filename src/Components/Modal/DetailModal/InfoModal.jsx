import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./InfoModal.css";

export default function InfoModal({ closeModalInfo, getPropertyInfo }) {
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
        <h2>اطلاعات کالا</h2>
        <div>
          <h3>نام کالا</h3>
          <h4>{getPropertyInfo.title}</h4>
        </div>
        <div>
          <h3>قیمت</h3>
          <h4>{getPropertyInfo.price}</h4>
        </div>
        <div>
          <h3>موجودی</h3>
          <h4>{getPropertyInfo.count}</h4>
        </div>
        <div>
          <h3>رنگ بندی</h3>
          <h4>{getPropertyInfo.color}</h4>
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

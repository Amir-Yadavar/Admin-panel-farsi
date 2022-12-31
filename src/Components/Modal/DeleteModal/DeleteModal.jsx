import React from "react";
import ReactDOM from "react-dom";
import "./DeleteModal.css";

export default function DeleteModal({submitDelete , cancelDelete}) {
  return ReactDOM.createPortal(
    <section className="modal-parent active-modal">
      <section className="container-modal">
        <h2>از حذف این مورد اطمینان دارید ؟</h2>
        <div>
          <button className="btn-product" onClick={()=>submitDelete()}>بله</button>
          <button className="btn-product" onClick={()=>cancelDelete()}>انصراف</button>
        </div>
      </section>
    </section>,
    document.getElementById("modal-row")
  );
}

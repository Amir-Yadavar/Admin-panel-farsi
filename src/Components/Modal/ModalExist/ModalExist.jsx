import  ReactDOM  from 'react-dom'
import './ModalExist.css'

import React from 'react'

export default function ModalExist({title,onCloseModal}) {
  return ReactDOM.createPortal(
    <section className='modal-parent'>
        <section className='container-modal-exist'>
        <h2>{title}</h2>

        <button className='btn-product' onClick={onCloseModal}>بستن</button>

        </section>
    </section>,
    document.getElementById("modal-row")
  )
}
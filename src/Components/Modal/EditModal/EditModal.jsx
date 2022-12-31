import './EditModa.css'
import  ReactDOM  from 'react-dom'

import React from 'react'

export default function EditModal({children,onSubmit,onClose ,title,submitTitle}) {
  return ReactDOM.createPortal(
    <section className='modal-parent'>
        <section className='container-modal-edit'>
        <h2>{title}</h2>

        {children}

        <div>
            <button className='btn-product' onClick={onSubmit}>{submitTitle}</button>
            <button className='btn-product' onClick={onClose}>انصراف</button>
        </div>
        </section>
    </section>,
    document.getElementById("modal-row")
  )
}

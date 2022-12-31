import React, { useContext, useState } from "react";
import "./TableProduct.css";
import "./LocalTableProduct.css";
import DeleteModal from "../Modal/DeleteModal/DeleteModal";
import InfoModal from "../Modal/DetailModal/InfoModal";
import EditModal from "../Modal/EditModal/EditModal";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { RiNumbersLine } from "react-icons/ri";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { IoMdAperture } from "react-icons/io";
import { productContext } from "./../Context/ProductContext";

export default function TableProduct() {
  const products = useContext(productContext);

  const [showModal, setShowModal] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [infoModalId, setInfoModalId] = useState(null);
  const [productsInfo, setProductsInfo] = useState(products);
  const [deleteModalId, setDeleteModalId] = useState(null);

  const modalInfoObj = products.find((product) => product.id === infoModalId);

  const submitDeleteHandler = () => {
    setProductsInfo(productsInfo.filter((item) => item.id !== deleteModalId));
    setShowModal(false);
    console.log(deleteModalId);
  };
  const cancelDeleteHandler = () => {
    setShowModal(false);
  };

  const closeModalInfoHandler = () => {
    setShowModalInfo(false);
  };

  const editUpdateHandler = () => {
    setShowModalEdit(false);
  };

  return (
    <section className="container-table-product">
      <table>
        <thead>
          <tr>
            <th>عکس محصول</th>
            <th> نام محصول</th>
            <th>قیمت محصول</th>
            <th>موجودی محصول</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {productsInfo.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.img} alt="" />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>
                <button
                  className="btn-product btn-width"
                  onClick={() => {
                    setShowModalInfo(true);
                    setInfoModalId(product.id);
                  }}
                >
                  اطلاعات
                </button>
                <button
                  className="btn-product btn-width"
                  onClick={() => setShowModalEdit(true)}
                >
                  ویرایش
                </button>
                <button
                  className="btn-product btn-width"
                  onClick={() => {
                    setShowModal(true);
                    setDeleteModalId(product.id);
                  }}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="small-size-table">
        <thead>
          <tr>
            <th>عکس محصول</th>
            <th> نام محصول</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {productsInfo.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.img} alt="" />
              </td>
              <td>{product.title}</td>
              <td>
                <button
                  className="btn-product btn-width"
                  onClick={() => setShowModalInfo(true)}
                >
                  اطلاعات
                </button>
                <button
                  className="btn-product btn-width"
                  onClick={() => {
                    setShowModalEdit(true);
                    setInfoModalId(product.id);
                  }}
                >
                  ویرایش
                </button>
                <button
                  className="btn-product btn-width"
                  onClick={() => {
                    setShowModal(true);
                    setDeleteModalId(product.id);
                  }}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <DeleteModal
          submitDelete={submitDeleteHandler}
          cancelDelete={cancelDeleteHandler}
        />
      )}

      {showModalInfo && (
        <InfoModal
          closeModalInfo={closeModalInfoHandler}
          getPropertyInfo={modalInfoObj}
        />
      )}

      {showModalEdit && (
        <EditModal
          onSubmit={editUpdateHandler}
          onClose={() => setShowModalEdit(false)}
          title={"ویراش اطلاعات کالا"}
          submitTitle={"ثبت ویرایش"}
        >
          <div className="container-input-edit">
            <span>
              <MdDriveFileRenameOutline />
            </span>
            <input type="text" placeholder="نام کالا را وارد کنید" />
          </div>
          <div className="container-input-edit">
            <span>
              <MdOutlinePriceChange />
            </span>
            <input type="text" placeholder="قیمت کالا را وارد کنید" />
          </div>
          <div className="container-input-edit">
            <span>
              <RiNumbersLine />
            </span>
            <input type="text" placeholder="تعداد موجودی کالا را وارد کنید" />
          </div>
          <div className="container-input-edit">
            <span>
              <MdOutlineFormatColorFill />
            </span>
            <input type="text" placeholder="رنگ بندی کالا را وارد کنید" />
          </div>
          <div className="container-input-edit">
            <span>
              <IoMdAperture />
            </span>
            <input type="text" placeholder="برند کالا را وارد کنید" />
          </div>
        </EditModal>
      )}
    </section>
  );
}

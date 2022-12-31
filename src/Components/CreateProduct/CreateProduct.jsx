import React, { useState } from "react";
import "./CreateProduct.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { RiNumbersLine } from "react-icons/ri";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { IoMdAperture } from "react-icons/io";

export default function CreateProduct({onInfo}) {
  // add new product
  const [titleProductNew, setTitleProductNew] = useState("");
  const [priceProductNew, setPriceProductNew] = useState("");
  const [countProductNew, setCountProductNew] = useState("");
  const [colorProductNew, setColorProductNew] = useState("");
  const [imgProductNew, setImgProductNew] = useState("");

  let newProductObj= null

  const createNewProductInfo = () => {
     newProductObj = {
      id: 7,
      title: titleProductNew,
      price: priceProductNew,
      count: countProductNew,
      color: colorProductNew,
      img: imgProductNew,
    };

  };
  
  //end  add new product

  return (
    <>
      <form className="new-product">
        <div>
          <span className="icon-input">
            <MdDriveFileRenameOutline />
          </span>
          <input
            type="text"
            placeholder="نام محصول ..."
            className="input-style"
            value={titleProductNew}
            onChange={(event) => setTitleProductNew(event.target.value)}
          />
        </div>
        <div>
          <span className="icon-input">
            <MdOutlinePriceChange />
          </span>
          <input
            type="text"
            placeholder="قیمت محصول ..."
            className="input-style"
            value={priceProductNew}
            onChange={(event) => setPriceProductNew(event.target.value)}
          />
        </div>
        <div>
          <span className="icon-input">
            <RiNumbersLine />
          </span>
          <input
            type="text"
            placeholder="تعداد موجودی محصول ..."
            className="input-style"
            value={countProductNew}
            onChange={(event) => setCountProductNew(event.target.value)}
          />
        </div>
        <div>
          <span className="icon-input">
            <MdOutlineFormatColorFill />
          </span>
          <input
            type="text"
            placeholder="رنگ بندی محصول ..."
            className="input-style"
            value={colorProductNew}
            onChange={(event) => setColorProductNew(event.target.value)}
          />
        </div>
        <div>
          <span className="icon-input">
            <RxDimensions />
          </span>
          <input
            type="text"
            placeholder="تصویر محصول ..."
            className="input-style"
            value={imgProductNew}
            onChange={(event) => setImgProductNew(event.target.value)}
          />
        </div>
        <div>
          <span className="icon-input">
            <IoMdAperture />
          </span>
          <input
            type="text"
            placeholder="برند محصول ..."
            className="input-style"
          />
        </div>
      </form>
      <div className="div-button">
        <button className="add-btn-product" onClick={createNewProductInfo} onInfo={newProductObj}>
          ثبت محصول
        </button>
      </div>
    </>
  );

  
}


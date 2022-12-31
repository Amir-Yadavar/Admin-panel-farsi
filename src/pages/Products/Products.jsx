import React from "react";
import "./Products.css";
import CreateProduct from "../../Components/CreateProduct/CreateProduct";
import TableProduct from "../../Components/TableProduct/TableProduct";
import { productData } from "./../../data";
import { productContext } from "./../../Components/Context/ProductContext";

export default function Products() {
  return (
    <section className="container-products">
      <section className="container-new-product">
        <h1 className="title-new-product"> ثبت محصول جدید</h1>
        <CreateProduct onInfo />
      </section>
      <productContext.Provider value={productData}>
        <TableProduct />
      </productContext.Provider>
    </section>
  );
}

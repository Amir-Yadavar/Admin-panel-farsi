import React, { useState } from "react";
import "./Orders.css";
import OrderMain from "../../Components/OrderMain/OrderMain";
import { orderData } from "../../data";

export default function Orders() {
  const [dataOrder, setDataOrder] = useState(orderData);

  const removeHandler = (orderId) => {
    setDataOrder(dataOrder.filter((item) => item.id !== orderId));
  };

  return (
    <section className="container-orders">
      {dataOrder.map((order) => (
        <OrderMain
          key={order.id}
          name={order.name}
          title={order.title}
          color={order.color}
          count={order.count}
          price={order.price}
          removeOrder={(orderId) => removeHandler(order.id)}
        />
      ))}
    </section>
  );
}

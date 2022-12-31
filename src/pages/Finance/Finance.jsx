import React from "react";
import "./Finance.css";
import ChartTopSale from "../../Components/Charts/ChartFinance/ChartSale/ChaetTop/ChartTopSale";
import ChartBuyTop from "../../Components/Charts/ChartFinance/ChartBuy/ChartBuyTop/ChartBuyTop";
import ChartBottomSale from "../../Components/Charts/ChartFinance/ChartSale/ChartBottom/ChartBottomSale";
import ChartBuyBottom from "../../Components/Charts/ChartFinance/ChartBuy/ChartBuybotton/ChartBuyBottom";

export default function Finance() {
  return (
    <section className="container-finance">
      <section>
        <h3>فروش مجموعه از ابتدای سال</h3>
        <div>
          <ChartTopSale />
        </div>
        <div>
          <ChartBottomSale />
        </div>
      </section>
      <section>
        <h3>خرید مجموعه از ابتدای سال</h3>
        <div>
          <ChartBuyTop />
        </div>
        <div>
          <ChartBuyBottom />
        </div>
      </section>
    </section>
  );
}

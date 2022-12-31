import React, { useState } from "react";
import Alert from "../../Components/Alert/Alert";
import OffsBox from "../../Components/OffsBox/OffsBox";
import { offsData } from "../../data";
import './Offs.css'

export default function Offs() {
  const [dataOffs, setDataOffs] = useState(offsData);

  return (
    <div>
      <Alert msg="در حال حاضر تخفیف جدیدی اعمال نکرده اید" />
      <section className="off-container">
        {dataOffs.map((off) => (
          <OffsBox
            key={off.id}
            title={off.title}
            img={off.img}
            start={off.start}
            end={off.end}
            percent={off.percent}
          />
        ))}
      </section>
    </div>
  );
}

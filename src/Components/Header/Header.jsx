import React from "react";
import "./Header.css";
import {AiOutlineBell} from 'react-icons/ai'
import {CiBrightnessDown} from 'react-icons/ci'
import {BiSearchAlt2} from 'react-icons/bi'

export default function Header() {
  return (
    <section className="container-header">
      <section>
        <img src="img/content5-1.png" alt="admin" className="admin-img" />
        <div>
          <h2>امیر یادآور</h2>
          <h4>برنامه نویس فرانت اند</h4>
        </div>
      </section>

      <section>
        <div>
            <input type="text" placeholder="دنبال چه چیزی هستید ؟" />
            <button className="btn"><BiSearchAlt2/></button>
        </div>
        <button className="btn"><AiOutlineBell/></button>
        <button className="btn"><CiBrightnessDown/></button>
      </section>
    </section>
  );
}

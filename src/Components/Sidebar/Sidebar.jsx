import React, { useState } from "react";
import "./Sidebar.css";
import "./LocalSidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRecommend } from "react-icons/md";
import { BsMarkdown } from "react-icons/bs";
import { TbZoomMoney } from "react-icons/tb";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link } from "react-router-dom";
import EditModal from "../../Components/Modal/EditModal/EditModal";
import ModalExist from "../Modal/ModalExist/ModalExist";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const closeSidebarHandler = () => setShowSidebar(false);

  const [showExistModal, setShowExistModal] = useState(false);
  const [messageExistModal, setMessageExistModal] = useState(false);

  return (
    <>
      <section
        className={
          showSidebar ? "container-sidebar" : "container-sidebar-hidden"
        }
      >
        <section>
          <h2>به پنل کاربری خوش آمدید</h2>
          <span onClick={closeSidebarHandler}>
            <AiOutlineClose />
          </span>
        </section>

        <ul>
          <li>
            <span className="span-icon">
              <AiOutlineHome />
            </span>
            <Link to={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <span className="span-icon">
              <BsBasket />
            </span>
            <Link to={"/products"}>محصولات</Link>
          </li>
          <li>
            <span className="span-icon">
              <AiOutlineComment />
            </span>
            <Link to={"/ticket"}>تیکت ها</Link>
          </li>
          <li>
            <span className="span-icon">
              <FiUsers />
            </span>
            <Link to={"/users"}>کاربران</Link>
          </li>
          <li>
            <span className="span-icon">
              <MdOutlineRecommend />
            </span>
            <Link to={'/orders'}>سفارشات</Link>
          </li>
          <li>
            <span className="span-icon">
              <BsMarkdown />
            </span>
            <Link to={"/offs"}>تخفیف ها</Link>
          </li>
          <li>
            <span className="span-icon">
              <TbZoomMoney />
            </span>
            <Link to={"/finance"}>امور مالی</Link>
          </li>
          <li>
            <span className="span-icon">
              <AiOutlinePoweroff />
            </span>
            <Link onClick={() => setShowExistModal(true)}>خروج </Link>
          </li>
        </ul>
      </section>

      <section
        className="side-icon-show"
        // className={showSidebar ? "side-icon-hidden" : "side-icon-show"}
        onClick={() => setShowSidebar(true)}
      >
        <CgMenuGridR />
      </section>

      {showExistModal && (
        <EditModal
          title={"آیا از خرج اطمینان دارید ؟"}
          submitTitle={"بله"}
          onClose={() => setShowExistModal(false)}
          onSubmit={() => {
            setShowExistModal(false);
            setMessageExistModal(true);
          }}
        />
      )}

      {messageExistModal && (
        <ModalExist
          title={"خوش اومدی به سلامت . از کنار برو 😝!"}
          onCloseModal={() => setMessageExistModal(false)}
        />
      )}
    </>
  );
}

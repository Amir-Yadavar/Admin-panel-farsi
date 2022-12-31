import React, { useState } from "react";
import "./User.css";
import UsersMain from "../../Components/UsersMain/UsersMain";
import { userData } from "../../data";
import UserModal from "../../Components/Modal/UserModal/UserModal";

export default function User() {
  const [userDataInfo, setUserDataInfo] = useState(userData);

  const [showModalUser, setShowModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const openModalHandler = (userId) => {
    setUserInfo(userData.filter((item) => item.id === userId));
    setShowModalUser(true);
  };

  const closeModalInfoHandler = () => {
    setShowModalUser(false);
  };

  return (
    <section className="container-user">
      {userDataInfo.map((user) => (
        <UsersMain
          name={user.name}
          key={user.id}
          id={user.id}
          chart={user.chart}
          openModal={(userId) => openModalHandler(user.id)}
        />
      ))}

      {showModalUser && (
        <UserModal
          name={userInfo[0].name}
          age={userInfo[0].age}
          tel={userInfo[0].tel}
          city={userInfo[0].city}
          closeModalInfo={closeModalInfoHandler}
        />
      )}
    </section>
  );
}

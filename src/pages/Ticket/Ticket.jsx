import React, { useEffect, useState } from "react";
import "./Ticket.css";
import Alert from "../../Components/Alert/Alert";
import TicketMain from "../../Components/TicketMain/TicketMain";
import { ticketData } from "../../data";
import ModalTicket from "../../Components/Modal/ModalTicket/ModalTicket";

export default function Ticket() {
  const [dataTicket, setDataTicket] = useState(ticketData);

  const [showModalTicket, setShowModalTicket] = useState(false);
  const [modalTicketInfo, setModalTicketInfo] = useState([]);

  const removeHandler = (itemId) => {
    setDataTicket(dataTicket.filter((ticket) => ticket.id !== itemId));
  };

  const infoHandler = (itemId) => {
    console.log(itemId);
    setModalTicketInfo(dataTicket.filter((ticket) => ticket.id === itemId));
  };

  useEffect(() => {
    console.log(modalTicketInfo);
  }, [modalTicketInfo]);

  return (
    <section className="container-ticket">
      <section>
        <h2>تیکت ها</h2>
        <h3>
          توجه : رسیدگی به تیکت های مشتری بسیار اهمیت دارد و باعث بازدهی بیشتر و
          رضایت مندی بیشتر میگردد
        </h3>
      </section>
      <Alert msg="تیکت جدیدی ثبت نشده است" />

      {dataTicket.map((item) => (
        <TicketMain
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          removeTicket={(itemId) => removeHandler(item.id)}
          openTicket={(itemId) => {
            infoHandler(item.id);
            setShowModalTicket(true);
          }}
        />
      ))}

      {showModalTicket && (
        <ModalTicket
          name={modalTicketInfo[0].name}
          desc={modalTicketInfo[0].desc}
          onCloseModalticket={() => setShowModalTicket(false)}
        />
      )}
    </section>
  );
}

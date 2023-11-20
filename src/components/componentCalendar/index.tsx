import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarMain } from "./style";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AppContext } from "../../context/appContext";

const reservation = [
  {
    name: "Paulo",
    checkin: "2023-11-15T12:00:00",
    checkout: "2023-11-19T07:00:00",
  },
  {
    name: "Mariano",
    checkin: "2023-11-15T13:30:00",
    checkout: "2023-11-20T07:00:00",
  },
  {
    name: "Maria",
    checkin: "2023-11-17T12:00:00",
    checkout: "2023-11-20T07:00:00",
  },
  {
    name: "Amir",
    checkin: "2023-11-22T12:00:00",
    checkout: "2023-11-30T07:00:00",
  },
];

export const CalendarComponent = () => {
  const { handleChangeFunction } = useContext(AppContext);
  const [headerFormatted, setHeaderFormatted] = useState(false);

  const events = reservation.flatMap((item) => [
    {
      title: item.name,
      start: item.checkin,
      end: item.checkin,
      classNames: ["checkin-event"],
    },
    {
      title: item.name,
      start: item.checkout,
      end: item.checkout,
      classNames: ["checkout-event"],
    },
  ]);

  const eventContent = (arg: any) => {
    const { title, start } = arg.event;

    const startTime = new Date(start).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <>
        <b>{title}</b> - {startTime}
      </>
    );
  };

  const dayHeaderContent = (arg: any) => {
    const dateText = arg.text.split(" ")[1].split("/")[0];
    return <span>{dateText}</span>;
  };

  useEffect(() => {
    return () => {
      setHeaderFormatted(false);
    };
  }, []);

  const handleEventDrop = (arg: any) => {
    const { start, title } = arg.event;
    const updatedData = { checkin: "", name: "", type: "" };

    const isCheckin = arg.jsEvent.target.classList.contains("checkin-event");

    if (isCheckin) {
      updatedData.checkin = moment(start).format("YYYY-MM-DDTHH:mm:ss");
      updatedData.name = title;
      updatedData.type = "Checkin";
    } else {
      updatedData.checkin = moment(start).format("YYYY-MM-DDTHH:mm:ss");
      updatedData.name = title;
      updatedData.type = "Checkout";
    }

    console.log(updatedData);
  };

  return (
    <CalendarMain>
      <div className="info">
        <div>
          <p>Checkin</p>
          <p>Checkout</p>
        </div>

        <button onClick={() => handleChangeFunction("createReservation", true)}>
          Criar Reserva
        </button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timegridPlugin, interactionPlugin]}
        initialView={"dayGridWeek"}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "today, next",
        }}
        titleFormat={{
          year: "numeric",
          month: "long",
        }}
        locale={"pt-br"}
        buttonText={{
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
        }}
        height={727}
        events={events}
        eventContent={eventContent}
        dayHeaderContent={dayHeaderContent}
        editable={true}
        eventResizableFromStart={true}
        eventDurationEditable={true}
        droppable={true}
        eventDrop={handleEventDrop}
      />
    </CalendarMain>
  );
};

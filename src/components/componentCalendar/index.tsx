import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarMain } from "./style";
import { useEffect, useState } from "react";
import moment from "moment";

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

  const eventContent = (arg) => {
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

  const dayHeaderContent = (arg) => {
    const dateText = arg.text.split(" ")[1].split("/")[0];
    return <span>{dateText}</span>;
  };

  useEffect(() => {
    return () => {
      setHeaderFormatted(false);
    };
  }, []);

  const handleEventDrop = (arg) => {
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
        height={607}
        events={events}
        eventContent={eventContent}
        dayHeaderContent={dayHeaderContent}
        editable={true}
        eventResizableFromStart={true}
        eventDurationEditable={true}
        eventDrop={handleEventDrop}
        // eventResize={handleEventResize}
      />
    </CalendarMain>
  );
};

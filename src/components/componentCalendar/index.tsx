import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarMain } from "./style";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AppContext } from "../../context/appContext";

export const CalendarComponent = () => {
  const { handleChangeFunction, getReservationState } = useContext(AppContext);
  const [headerFormatted, setHeaderFormatted] = useState(false);
  if (!getReservationState) {
    return (
      <CalendarMain>
        <h3>Loading...</h3>
      </CalendarMain>
    );
  }

  const events = getReservationState.flatMap((item: any) => [
    {
      title: item.guests[0].name,
      start: item.checkin,
      end: item.checkin,
      classNames: ["checkin-event"],
    },
    {
      title: item.guests[0].name,
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

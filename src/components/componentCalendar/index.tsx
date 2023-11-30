import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarMain, LoadingBaseStyle } from "./style";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AppContext } from "../../context/appContext";
import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

export const CalendarComponent = () => {
  const { handleChangeFunction, getReservationState } = useContext(AppContext);
  const { t, i18n } = useTranslation(["calendar"]);

  const lang = i18n.language.toLowerCase();

  if (!getReservationState) {
    return (
      <LoadingBaseStyle>
        <ReactLoading
          type={"spinningBubbles"}
          color={" #f9a63a"}
          height={233}
          width={150}
        />
      </LoadingBaseStyle>
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
    let dateText;
    if (lang === "en") {
      const matches = arg.text.match(/\/(\d{1,2})/);
      dateText = matches ? matches[1] : "";
    } else {
      dateText = arg.text.split(" ")[1].split("/")[0];
    }

    return <span>{dateText}</span>;
  };

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
  };

  return (
    <CalendarMain>
      <div className="info">
        <div>
          <p>{t("checkinLabel")}</p>
          <p>{t("checkoutLabel")}</p>
        </div>

        <button onClick={() => handleChangeFunction("createReservation", true)}>
          {t("createReservationButton")}
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
        locale={lang === "en" ? "en" : "pt-br"}
        buttonText={{
          today: t("todayButton"),
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

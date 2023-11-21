import { createContext, useEffect, useState } from "react";
import { iAppContext, iAppContextProps } from "./type";
import { api } from "../../services/api";

export const AppContext = createContext({} as iAppContext);

export const AppProviders = ({ children }: iAppContextProps) => {
  // Test - Apagar depois
  const [testState, setTestState] = useState<boolean>(true);
  const [createReservation, setCreateReservation] = useState<boolean>(false);
  const [modalUpdateRoom, setModalUpdateRoom] = useState<boolean>(false);
  const [modalUpdateGuest, setModalUpdateGuest] = useState<boolean>(false);
  const [modalCretePromotion, setModalCreatePromotion] =
    useState<boolean>(false);
  const [modalCreateGuest, setModalCreateGuest] = useState<boolean>(false);
  const [modalUpdatePromotion, setModalUpdatePromotion] =
    useState<boolean>(false);
  const [modalRegisterAttedant, setModalRegisterAttendant] =
    useState<boolean>(false);
  const [modalUpdateHotel, setModalUpdateHotel] = useState<boolean>(false);
  const [modalUpdateTypeRoom, setModalUpdateTypeRoom] =
    useState<boolean>(false);
  const [modalCreateRoom, setModalCreateRoom] = useState(false);
  const [modalScheduleReservation, setModalScheduleReservation] =
    useState(false);
  const [getReservationState, setGetReservationState] = useState<[]>(
    null as any
  );
  const [getRoomState, setGetRoomState] = useState(null as any);
  const [getTypeRoomState, setGetTypeRoomState] = useState(null as any);

  const handleChangeFunction = (state: string, value: boolean) => {
    switch (state) {
      case "testState":
        setTestState(value);
        break;
      case "createReservation":
        setCreateReservation(value);
        break;
      case "modalUpdateRoom":
        setModalUpdateRoom(value);
        break;
      case "modalUpdateGuest":
        setModalUpdateGuest(value);
        break;
      case "modalCreatePromotion":
        setModalCreatePromotion(value);
        break;
      case "modalCreateGuest":
        setModalCreateGuest(value);
        break;
      case "modalRegisterAttendant":
        setModalRegisterAttendant(value);
        break;
      case "modalUpdateHotel":
        setModalUpdateHotel(value);
        break;
      case "modalUpdatePromotion":
        setModalUpdatePromotion(value);
        break;
      case "modalUpdateTypeRoom":
        setModalUpdateTypeRoom(value);
        break;
      case "modalCreateRoom":
        setModalCreateRoom(value);
        break;
      case "modalScheduleReservation":
        setModalScheduleReservation(value);
        break;
    }
  };

  useEffect(() => {
    const getOverview = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQXR0ZW5kYW50IiwiaWF0IjoxNzAwNTcyNzg3LCJleHAiOjE3MDA2MDE1ODcsInN1YiI6IjgyMGZmYTcyLTMzODEtNGUwOS04MTdlLWVjMGRiYzM2ZDRlMiJ9.KVu8PTvBizinOFJIPidXf2hqsBMzqITrI3yE_p1QEbg";
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const resposeReservation = await api.get(`/reservation`);
      setGetReservationState(resposeReservation.data);

      const responseRoom = await api.get(`/room?pageSize=50`);
      setGetRoomState(responseRoom.data);

      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);
    };
    getOverview();
  }, []);

  return (
    <AppContext.Provider
      value={{
        testState,
        handleChangeFunction,
        createReservation,
        modalUpdateRoom,
        modalUpdateGuest,
        modalCretePromotion,
        modalCreateGuest,
        getReservationState,
        getRoomState,
        getTypeRoomState,
        modalRegisterAttedant,
        modalUpdateHotel,
        modalUpdatePromotion,
        modalUpdateTypeRoom,
        modalCreateRoom,
        modalScheduleReservation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

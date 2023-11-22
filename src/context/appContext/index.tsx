import { createContext, useEffect, useState } from "react";
import {
  iAppContext,
  iAppContextProps,
  iGuestData,
  iHotel,
  iUser,
} from "./type";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

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
  const [getGuestState, setGetGuestState] = useState(null as any);
  const [getHistoryState, setGetHistoryState] = useState(null as any);

  // Fora de teste, REAL
  const [loadingButton, setLoadingButton] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [hotel, setHotel] = useState<iHotel | null>(null);

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

  const navigate = useNavigate();
  const loginUser = async (data: iUser) => {
    try {
      setLoadingButton(true);
      const responseCreate = await api.post("/login", data);
      setUser(responseCreate.data);
      localStorage.setItem("token", JSON.stringify(responseCreate.data.token));
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButton(false);
    }
  };

  const createHotel = async (data: iHotel) => {
    try {
      setLoadingButton(true);
      const responseCreate = await api.post("/hotel", data);
      setHotel(responseCreate.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButton(false);
    }
  };

  const registerGuest = async (data: iGuestData) => {
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const responseRegisterGuest = await api.post("/guest", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });

      console.log(responseRegisterGuest);
    } catch (error) {}
  };

  useEffect(() => {
    const getOverview = async () => {
      let token: string = "";
      const local = localStorage.getItem("token");
      if (local) {
        token = JSON.parse(local);
      }

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const listHotel = await api.get("/hotel");
      setHotel(listHotel.data[0]);

      const resposeReservation = await api.get(`/reservation`);
      setGetReservationState(resposeReservation.data);

      const responseRoom = await api.get(`/room?pageSize=100`);
      setGetRoomState(responseRoom.data);

      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);

      const responseGuest = await api.get(`/guest`);
      setGetGuestState(responseGuest.data);

      const responseHistory = await api.get(`/history`);
      setGetHistoryState(responseHistory.data);
    };
    getOverview();
  }, [user]);

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
        loginUser,
        loadingButton,
        user,
        hotel,
        createHotel,
        getGuestState,
        getHistoryState,
        registerGuest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

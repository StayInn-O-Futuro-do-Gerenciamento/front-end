import { createContext, useEffect, useState } from "react";
import {
  iAppContext,
  iAppContextProps,
  iGuestData,
  iHotel,
  iRoom,
  iUser,
} from "./type";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  tAddRoomData,
  tUpdateRoomData,
  tUpdateTypeRoomData,
} from "../../schemas/schemaRoom";
import moment from "moment";

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
  const [getOfferState, setGetOfferState] = useState(null as any);
  const [getTypeRoomPaginationState, setGetTypeRoomPaginationState] = useState(
    null as any
  );
  const [getTypeRoomSearchState, setGetTypeRoomSearchState] = useState(
    null as any
  );

  const [getRoomId, setGetRoomId] = useState(null as any);
  const [getTypeRoomId, setGetTypeRoomId] = useState(null as any);

  // Fora de teste, REAL
  const [loadingButton, setLoadingButton] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [hotel, setHotel] = useState<iHotel | null>(null);

  const [fetchUpdateData, setFetchUpdateData] = useState();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    setDarkMode(!darkMode);
  };

  const handleChangeFunction = (state: string, value: boolean | any) => {
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
      case "searchOn":
        setGetTypeRoomSearchState(value);
        break;
      case "roomId":
        setGetRoomId(value);
        break;
      case "typeRoomId":
        setGetTypeRoomId(value);
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
      localStorage.setItem(
        "userType",
        JSON.stringify(responseCreate.data.type)
      );

      if (!hotel) {
        navigate("/hotel");
      } else {
        navigate("/dashboard");
      }
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
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButton(false);
    }
  };

  const registerGuest = async (data: iGuestData) => {
    const token = localStorage.getItem("token");

    try {
      const responseRegisterGuest = await api.post("/guest", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });
      const responseGuest = await api.get(`/guest?pageSize=2000`);
      setGetGuestState(responseGuest.data);
      handleChangeFunction("modalCreateGuest", false);
    } catch (error) {}
  };

  const registerManager = async (data: iGuestData) => {
    try {
      const responseRegisterManager = await api.post("/manager", data);
    } catch (error) {
    } finally {
      navigate("/");
    }
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

      const responseRoom = await api.get(`/room?pageSize=1000`);
      setGetRoomState(responseRoom.data);

      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);

      const responseGuest = await api.get(`/guest?pageSize=2000`);
      setGetGuestState(responseGuest.data);

      const responseHistory = await api.get(`/history`);
      setGetHistoryState(responseHistory.data);

      const responseOffer = await api.get(`/offer`);
      setGetOfferState(responseOffer.data);

      const responseRoompagination = await api.get(`/room?page=1&pageSize=10`);
      setGetTypeRoomPaginationState(responseRoompagination.data);
    };
    getOverview();
  }, []);

  const getFrankstainHistoryPrice = (id: any) => {
    const guestHistory = getHistoryState.filter(
      (history: any) => history.guest.id === id
    );

    let priceTotal = 0;

    guestHistory.forEach((history: any) => {
      if (history.room && history.room.typeRoom) {
        const { price } = history.room.typeRoom;
        priceTotal += parseInt(price);
      }
    });

    return priceTotal;
  };

  const createRoom = async (data: tAddRoomData) => {
    console.log("Oi");
    const token = localStorage.getItem("token");

    try {
      const responseCreateRoom = await api.post("/room", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });
      const responseRoom = await api.get(`/room?pageSize=100`);
      setGetRoomState(responseRoom.data);

      setModalCreateRoom(false);
    } catch (error) {}
  };

  const updateRoom = async (data: tUpdateRoomData) => {
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const responseUpdateRoom = await api.patch(`room/${getRoomId}`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });
      const responseRoom = await api.get(`/room?pageSize=100`);
      setGetRoomState(responseRoom.data);

      setModalUpdateRoom(false);

      console.log(responseUpdateRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTypeRoom = async (data: tUpdateTypeRoomData) => {
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const responseUpdateTypeRoom = await api.patch(
        `typeRoom/${getTypeRoomId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token!)}`,
          },
        }
      );
      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);
      setModalUpdateTypeRoom(false);

      console.log(responseUpdateTypeRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const scheduleReservation = async (guest: any) => {
    if (
      getTypeRoomSearchState.checkin &&
      getTypeRoomSearchState.checkout &&
      getRoomId
    ) {
      const formattedCheckin = moment(getTypeRoomSearchState.checkin).format(
        "YYYY-MM-DDTHH:mm:ss"
      );

      const formattedCheckout = moment(getTypeRoomSearchState.checkout).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      const schedule = {
        checkin: formattedCheckin,
        checkout: formattedCheckout,
        numberAdults: getTypeRoomSearchState.numberAdults,
        numberKids: getTypeRoomSearchState.numberChildrens,
        room: getRoomId,
        guest: guest,
      };
      let token: string = "";
      const local = localStorage.getItem("token");
      if (local) {
        token = JSON.parse(local);
      }
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.post(`/reservation`, schedule);
      handleChangeFunction("modalScheduleReservation", false);

      const resposeReservation = await api.get(`/reservation`);
      setGetReservationState(resposeReservation.data);
    }
  };

  const createAttendant = async (data: any) => {
    const token = localStorage.getItem("token");
    try {
      const responseCreateAttendant = await api.post(`/attendant`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });
    } catch (error) {}
  };

  const createOffer = async (data: any) => {
    const token = localStorage.getItem("token");
    try {
      const responseCreateOffer = await api.post(`/offer`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });

      const responseOffer = await api.get(`/offer`);
      setGetOfferState(responseOffer.data);
      handleChangeFunction("modalCreatePromotion", false);
    } catch (error) {
      console.log(error);
    }
  };

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
        getFrankstainHistoryPrice,
        getHistoryState,
        getOfferState,
        registerGuest,
        getTypeRoomPaginationState,
        getTypeRoomSearchState,
        getRoomId,
        createRoom,
        updateRoom,
        updateTypeRoom,
        setFetchUpdateData,
        getTypeRoomId,
        fetchUpdateData,
        registerManager,
        scheduleReservation,
        setGetReservationState,
        createAttendant,
        setGetGuestState,
        setGetRoomState,
        setGetOfferState,
        setGetTypeRoomState,
        setGetHistoryState,
        createOffer,
        toggleDarkMode,
        darkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

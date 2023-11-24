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

  const [test, setTest] = useState();

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

      console.log(responseRegisterGuest);
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

      const responseRoom = await api.get(`/room?pageSize=100`);
      setGetRoomState(responseRoom.data);

      const responseTypeRoom = await api.get(`/typeRoom`);
      setGetTypeRoomState(responseTypeRoom.data);

      const responseGuest = await api.get(`/guest?pageSize=100`);
      setGetGuestState(responseGuest.data);

      const responseHistory = await api.get(`/history`);
      setGetHistoryState(responseHistory.data);

      const responseOffer = await api.get(`/offer`);
      setGetOfferState(responseOffer.data);
      const responseRoompagination = await api.get(`/room?page=1&pageSize=10`);
      setGetTypeRoomPaginationState(responseRoompagination.data);
    };
    getOverview();
  }, [user]);

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
    console.log(data);
    try {
      const responseCreateRoom = await api.post("/room", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      });

      setModalCreateRoom(false);

      console.log(responseCreateRoom);
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

      setModalUpdateRoom(false);

      console.log(responseUpdateRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTypeRoom = async (data: tUpdateTypeRoomData) => {
    const token = localStorage.getItem("token");
    console.log(data);
    console.log(getTypeRoomId);
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

      console.log(responseUpdateTypeRoom);
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
        setTest,
        getTypeRoomId,
        test,
        registerManager,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

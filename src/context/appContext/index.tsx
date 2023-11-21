import { createContext, useEffect, useState } from "react";
import { iAppContext, iAppContextProps } from "./type";
import { api } from "../../services/api";

export const AppContext = createContext({} as iAppContext);

export const AppProviders = ({ children }: iAppContextProps) => {
  // Test - Apagar depois
  const [testState, setTestState] = useState<boolean>(true);
  const [createReservation, setCreateReservation] = useState<boolean>(false);
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
    }
  };

  useEffect(() => {
    const getOverview = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQXR0ZW5kYW50IiwiaWF0IjoxNzAwNTY3ODIyLCJleHAiOjE3MDA1OTY2MjIsInN1YiI6IjJjZmYzOWQ2LWU1ZjgtNDE2MS04NzA3LWE0MDc2NzkwMDViZiJ9.qhDC15Lp9SFMy_cbrcgl98vl-s6aZk-ALFU_h9H-imk";
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
        getReservationState,
        getRoomState,
        getTypeRoomState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

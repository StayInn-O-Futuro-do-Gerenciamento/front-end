import React from "react";

// Typagem do children
export interface iAppContextProps {
  children: React.ReactNode;
}
// Typagem das funções/states que serão exportados.
export interface iAppContext {
  testState: boolean;
  handleChangeFunction: (state: string, value: boolean) => void;
  createReservation: boolean;
  modalUpdateRoom: boolean;
  modalUpdateGuest: boolean;
  modalCretePromotion: boolean;
  modalCreateGuest: boolean;
  getReservationState: any;
  getRoomState: any;
  getTypeRoomState: any;
  modalRegisterAttedant: boolean;
  modalUpdateHotel: boolean;
  modalUpdatePromotion: boolean;
  modalUpdateTypeRoom: boolean;
  modalCreateRoom: boolean;
  modalScheduleReservation: boolean;
  getGuestState: any;
}

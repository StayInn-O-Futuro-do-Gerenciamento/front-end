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
  getReservationState: any;
  getRoomState: any;
  getTypeRoomState: any;
}

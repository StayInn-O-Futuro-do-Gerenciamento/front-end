import React from "react";

// Typagem do children
export interface iAppContextProps {
  children: React.ReactNode;
}
export interface iUser {
  token: string;
  type: string;
}
export interface iHotel {
  name: string;
  street: string;
  number: string;
  zipCode: string;
  city: string;
  id: string;
}

export interface iGuestData {
  name: string;
  rg: string;
  cpf: string;
  passport: string;
  nationality: string;
  phoneNumbers: string[];
  emergencyContacts: iEmergencyContact[];
  address: iAddress;
}

export interface iEmergencyContact {
  name: string;
  phoneNumber: string;
}

export interface iAddress {
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
}

// Typagem das funções/states que serão exportados.
export interface iAppContext {
  testState: boolean;
  handleChangeFunction: (state: string, value: boolean | any) => void;
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
  loadingButton: boolean;
  loginUser: (data: any) => void;
  user: iUser | null;
  hotel: iHotel | null;
  createHotel: (data: iHotel) => void;
  getGuestState: any;
  getFrankstainHistoryPrice: any;
  getHistoryState: any;
  getOfferState: any;
  registerGuest: (data: iGuestData) => void;
  getTypeRoomPaginationState: any;
  getTypeRoomSearchState: any;
  getRoomId: any;
}

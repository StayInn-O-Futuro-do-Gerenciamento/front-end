import React from "react";
import {
  tAddRoomData,
  tUpdateRoomData,
  tUpdateTypeRoomData,
} from "../../schemas/schemaRoom";
import { tUpdateGuestData } from "../../schemas/schemaGuest";

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
  numberRoomsTotal: number;
  roomsPerFloor: number;
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

export interface iRoomType {
  name: string;
  description: string;
  confort: string;
  price: number;
  personCount: number;
  rate: string;
  roomTypeQuantity: number;
}

export interface iRoom {
  status: string;
  availability: string;
  typeRoom: iRoomType;
}

export interface iUpdateRoom {
  available: boolean;
  status: string | boolean;
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
  updateGuest: (data: tUpdateGuestData) => void;
  getTypeRoomPaginationState: any;
  getTypeRoomSearchState: any;
  getRoomId: any;
  createRoom: (data: tAddRoomData) => void;
  updateRoom: (data: tUpdateRoomData) => void;
  updateTypeRoom: (data: any) => void;
  createAttendant: (data: any) => void;
  setFetchUpdateData: any;
  fetchUpdateData: any;
  getTypeRoomId: string;
  registerManager: any;
  scheduleReservation: any;
  setGetReservationState: React.Dispatch<React.SetStateAction<any>>;
  setGetGuestState: React.Dispatch<React.SetStateAction<any>>;
  setGetRoomState: React.Dispatch<React.SetStateAction<any>>;
  setGetOfferState: React.Dispatch<React.SetStateAction<any>>;
  setGetTypeRoomState: React.Dispatch<React.SetStateAction<any>>;
  setGetHistoryState: React.Dispatch<React.SetStateAction<any>>;
  createOffer: (data: any) => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
  modalUpdateReservation: boolean;
  updateReservation: (data: any) => void;
  deleteReservation: (data?: any) => void;
  updateOffer: (data: any) => void;
  createInstance: () => void;
  qrCodeWpp: string;
  instanceWpp: string;
  getGuestId: string;
  updateOfferAuto: (data: any, id: any) => void;
}

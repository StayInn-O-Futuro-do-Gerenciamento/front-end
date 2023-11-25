import { z } from "zod";

export const registerHotelSchemas = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  street: z.string().min(1, "Rua é obrigatório"),
  number: z.string().min(1, "Numero é obrigatório"),
  zipCode: z.string().min(1, "Cep é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatório"),
  numberRoomsTotal: z
    .number()
    .or(z.string().min(1, "Numero total de quarto é obrigatório")),
  roomsPerFloor: z
    .number()
    .or(z.string().min(1, "Numero de quartos por andar é obrigatório")),
});

export type registerHotelData = z.infer<typeof registerHotelSchemas>;

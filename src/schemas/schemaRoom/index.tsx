import { z } from "zod";

const typeRoomSchemas = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(80, "Máximo 80 caracteres"),
  description: z.string().min(1, "Descrição obrigatória"),
  personCount: z.string().min(1, "A contagem de pessoas deve ser pelo menos 1"),
  rate: z.enum(["Flexível", "Restrito", "Sem reembolso"]),
  confort: z.string().min(1, "Tipo de quarto obrigatório"),
});
export const addRoomSchemas = z.object({
  price: z.string().min(0.01, "Preço deve ser maior que zero"),
  availability: z.enum(["Ocupado", "Disponível"]),
  status: z.enum(["Limpo", "Sujo", "Em Manutenção"]),
  roomTypeQuantity: z.string().min(1, "Deve conter pelo menos 1 quarto"),
  typeRoom: typeRoomSchemas,
});

export const updateRoomSchemas = z
  .object({
    description: z.string().min(1, "Descrição obrigatória"),
    availability: z.enum(["Ocupado", "Disponível"]),
    status: z.enum(["Limpo", "Sujo", "Em Manutenção"]),
  })
  .partial();

export const roomReturnSchema = addRoomSchemas.extend({
  id: z.string(),
  roomNumber: z.string(),
  secretKey: z.string(),
  floor: z.string(),
});

export type tUpdateRoomData = z.infer<typeof updateRoomSchemas>;

export type tAddRoomData = z.infer<typeof addRoomSchemas>;

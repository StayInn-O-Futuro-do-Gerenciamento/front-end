import { z } from "zod";

const typeRoomSchemas = z.object({
  name: z
    .string()
    .nonempty("Nome é obrigatório")
    .max(80, "Máximo 80 caracteres"),
  description: z.string().nonempty("Descrição obrigatória"),
  personCount: z.number().min(1, "A contagem de pessoas deve ser pelo menos 1"),
  rate: z.enum(["Flexível", "Restrito", "Sem reembolso"]),
  confort: z.string().nonempty("Tipo de quarto obrigatório"),
});
export const addRoomSchemas = z.object({
  price: z.number().min(0.01, "Preço deve ser maior que zero"),
  availability: z.enum(["Ocupado", "Disponível"]),
  status: z.enum(["Limpo", "Sujo", "Em Manutenção"]),
  roomTypeQuantity: z.number().min(1, "Deve conter pelo menos 1 quarto"),
  typeRoom: typeRoomSchemas.extend({ id: z.string() }),
});

export const UpdateRoomSchemas = z
  .object({
    description: z.string().nonempty("Descrição obrigatória"),
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

export type UpdateRoomData = z.infer<typeof UpdateRoomSchemas>;

export type addRoomData = z.infer<typeof addRoomSchemas>;

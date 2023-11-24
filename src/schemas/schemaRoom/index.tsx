import { boolean, z } from "zod";

const typeRoomSchemas = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(80, "Máximo 80 caracteres"),
  description: z.string().min(1, "Descrição obrigatória"),
  personCount: z
    .number()
    .or(z.string().min(0.01, "A contagem de pessoas deve ser pelo menos 1")),
  rate: z.enum(["Flexível", "Restrito", "Sem reembolso"]),
  confort: z.string().min(1, "Tipo de quarto obrigatório"),
  roomTypeQuantity: z
    .number()
    .or(z.string().min(1, "Deve conter pelo menos 1 quarto")),
  price: z.number().or(z.string().min(0.01, "Preço deve ser maior que zero")),
});
export const addRoomSchemas = z.object({
  status: z.enum(["Limpo", "Sujo", "Em Manutenção"]),
  typeRoom: typeRoomSchemas,
});

export const updateTypeRoomSchemas = z
  .object({
    name: z
      .string()
      .min(1, "Nome é obrigatório")
      .max(80, "Máximo 80 caracteres"),
    description: z.string().min(1, "Descrição obrigatória"),
    personCount: z
      .number()
      .or(z.string().min(0.01, "A contagem de pessoas deve ser pelo menos 1")),
    rate: z.enum(["Flexível", "Restrito", "Sem reembolso"]),
    confort: z.string().min(1, "Tipo de quarto obrigatório"),
    roomTypeQuantity: z
      .number()
      .or(z.string().min(1, "Deve conter pelo menos 1 quarto")),
    price: z.number().or(z.string().min(0.01, "Preço deve ser maior que zero")),
  })
  .partial();

export const updateRoomSchemas = z
  .object({
    // description: z.string().min(1, "Descrição obrigatória"),
    available: z.enum(["Ocupado", "Disponível"]).or(z.boolean()),
    status: z.enum(["Limpo", "Sujo", "Em Manutenção"]),
  })
  .partial();

export type tUpdateRoomData = z.infer<typeof updateRoomSchemas>;

export type tUpdateTypeRoomData = z.infer<typeof typeRoomSchemas>;

export type tAddRoomData = z.infer<typeof addRoomSchemas>;

import { z } from "zod";

export const addOfferSchemas = z.object({
  offerName: z
    .string()
    .min(1, "Nome obrigatório")
    .max(80, "Máximo 80 caracteres"),
  offerDescription: z.string().nonempty("Descrição obrigatória"),
  discount: z.number().min(0.01, "Desconto deve ser maior que zero"),
  startDate: z.date(),
  finishDate: z.date(),
  typeRoom: z.object({}),
});

export const updateOfferSchemas = z
  .object({
    offerName: z
      .string()
      .min(1, "Nome obrigatório")
      .max(80, "Máximo 80 caracteres"),
    offerDescription: z.string().min(1, "Descrição obrigatória"),
    discount: z.number().min(0.01, "Desconto deve ser maior que zero"),
    startDate: z.date(),
    finishDate: z.date(),
    typeRoom: z.object({}),
  })
  .partial();

export const offerReturnSchemas = addOfferSchemas.extend({
  id: z.string(),
});

export type AddOfferData = z.infer<typeof addOfferSchemas>;

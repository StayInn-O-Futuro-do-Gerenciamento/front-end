import { z } from "zod";

export const registerAddressSchemas = z.object({
  street: z.string().min(1, "Rua obrigatória").max(50, "Máximo 50 caractéres"),
  number: z.string().min(1, "Número obrigatório").max(10, "Máximo 10 dígitos"),
  city: z.string().min(1, "Cidade obrigatória").max(10, "Máximo 10 dígitos"),
  state: z
    .string()
    .max(10, "Máximo 10 caractéres")
    .min(1, "Estado obrigatório"),
  zipCode: z.string().min(1, "CEP obrigatório").max(10, "Máximo 10 caractéres"),
});

export const updateAddressSchemas = z
  .object({
    street: z
      .string()
      .min(1, "Rua obrigatória")
      .max(50, "Máximo 50 caractéres"),
    number: z
      .string()
      .min(1, "Número obrigatório")
      .max(10, "Máximo 10 dígitos"),
    city: z.string().min(1, "Cidade obrigatória").max(10, "Máximo 10 dígitos"),
    state: z
      .string()
      .max(10, "Máximo 10 caractéres")
      .min(1, "Estado obrigatório"),
    zipCode: z
      .string()
      .min(1, "CEP obrigatório")
      .max(10, "Máximo 10 caractéres"),
  })
  .partial();

export const addressReturnSchemas = registerAddressSchemas.extend({
  id: z.string(),
});

export type registerAddressData = z.infer<typeof registerAddressSchemas>;

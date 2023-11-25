import { z } from "zod";
import { registerAddressSchemas, updateAddressSchemas } from "../schemaAddress";

export const registerGuestSchemas = z.object({
  name: z.string().max(50, "Máximo 50 caracteres").min(1, "Nome obrigatório"),
  rg: z.string().min(1, "Rg é obrigatória").max(10, "Máximo 10 dígitos"),
  cpf: z.string().min(1, "Cpf é obrigatório").max(11, "Máximo 11 dígitos"),
  passport: z.string().max(6, "Máximo 6 dígitos").min(6, "Mínimo 6 dígitos"),
  nationality: z
    .string()
    .min(1, "Nacionalidade obrigatória")
    .max(15, "Máximo 15 caracteres"),
  phoneNumbers: z.string().min(1, "Celular necessario"),
  phoneNumber2: z.string(),
  emergencyContacts: z.array(
    z.object({
      name: z.string().min(1, "Nome é obrigatório"),
      phoneNumber: z.string().min(1, "Número obrigatório"),
    })
  ),
  address: registerAddressSchemas,
});

export const updateGuestSchemas = z
  .object({
    name: z
      .string()
      .min(1, "Nome é obrigatório")
      .max(50, "Máximo 50 caracteres"),
    rg: z
      .string()
      .min(1, "Rg é obrigatória")
      .max(10, "Máximo 10 dígitos")
      .min(7, "Mínimo 7 dígitos"),
    cpf: z.string().min(1, "Cpf é obrigatório").max(11, "Máximo 11 dígitos"),
    passport: z.string().max(6, "Máximo 6 dígitos").min(6, "Mínimo 6 dígitos"),
    nationality: z
      .string()
      .min(1, "Nacionalidade obrigatória")
      .max(15, "Máximo 15 caracteres"),
    phoneNumbers: z.array(z.string()),
    emergencyContacts: z.array(
      z.object({
        name: z.string(),
        phoneNumber: z.string(),
      })
    ),
    address: updateAddressSchemas,
  })
  .partial();

export const guestReturnSchema = registerGuestSchemas.extend({
  id: z.string(),
  address: registerAddressSchemas.extend({
    id: z.string(),
  }),
});

export type registerGuestData = z.infer<typeof registerGuestSchemas>;

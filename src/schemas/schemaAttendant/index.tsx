import { z } from "zod";

export const registerAttendantSchemas = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export const returnAttendantSchemas = z.object({
  name: z.string(),
  id: z.string(),
  type: z.string(),
});

export type registerAttendantData = z.infer<typeof registerAttendantSchemas>;

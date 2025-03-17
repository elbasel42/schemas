import { z } from "zod";

export const CreateSucessSchema = z.object({
  status: z.string(),
  message: z.string(),
  data: z.object({
    id: z.number(),
  }),
});

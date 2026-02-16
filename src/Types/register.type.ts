import { registerSchema } from "@/Schemas/register";
import z from "zod";

export type RegisterType = z.infer<typeof registerSchema>
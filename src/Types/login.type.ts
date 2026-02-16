import { loginSchema } from "@/Schemas/login";
import z from "zod";

export type loginType = z.infer<typeof loginSchema>
import z, { string } from "zod"

export const loginSchema = z.object({
    email:string().nonempty("email is required").min(3).email(),
    password:string().nonempty("password is required").min(6),
    
})
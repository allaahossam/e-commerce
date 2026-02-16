"use client"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginSchema } from "@/Schemas/login";
import { loginType } from "@/Types/login.type";
import { login } from "../api/login";
import { loginInput } from "@/constents/login-inputs";
import{ signIn} from "next-auth/react"


export default function Login() {
  const router = useRouter()
  const [loding, setloding] = useState(false);
  const form = useForm({
    defaultValues:{
      email:"",
      password:"",
    },
    resolver:zodResolver(loginSchema)
  });



  const onSubmit = async (data:loginType)=>{
    setloding(true)
    const res= await login(data);

    signIn("credentials" , {...data , redirect:true , callbackUrl:"/"})
    
    // if(res){
    //   router.push("/login")
    // }
    setloding(false)
    
    
  };


    
  return <>
  <h1>LOGIN Page</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 mx-auto">

       <FieldGroup>
       {loginInput.map(({name,placeholder})=>  
       <Controller 
       key={name}
       name={name} control={form.control} render={({field,fieldState}) => (
                <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>{name}</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder={placeholder}
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
)             
}/>)}

       <Button disabled={loding} variant="outline" className="bg-slate-700 disabled:opacity-50 ">Submit</Button>
       </FieldGroup>


      </form>
  
  </>
    
}

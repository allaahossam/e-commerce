"use client"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { registerInput } from "@/constents/register-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema,  } from "@/Schemas/register";
import { RegisterType } from "@/Types/register.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from "../api/register";


export default function Register() {
  const router = useRouter()
  const [loding, setloding] = useState(false);
  const form = useForm({
    defaultValues:{
      name : "",
      email:"",
      password:"",
      rePassword:"",
      phone:"", 
    },
    resolver:zodResolver(registerSchema)
  });

  const onSubmit = async (data:RegisterType)=>{
    setloding(true)
    const res= await register(data);
    if(res){
      router.push("/login")
    }
    setloding(false)
    
    
  };


    
  return <>
  <h1>Register Page</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 mx-auto">

       <FieldGroup>
       {registerInput.map(({name,placeholder})=>  
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

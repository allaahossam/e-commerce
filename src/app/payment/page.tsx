"use client"
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import  { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { createCashOrder, createVisaOrder, shippingAddressType } from '../api/create Cash Order';
import { cartContext } from '../_context/CartContext';
import { toast } from 'sonner';

export default function page() {

    const form = useForm({
        defaultValues:{
            details:"",
            phone:"",
            city:"",
           paymentMethod:"cash"

        },
    })

    const {cartId , setcartData , setnumOfCartItems} = useContext(cartContext)

    async function handlePayment(value) {
        // console.log(value);
         console.log("Form Values:", value)
         console.log("CartId:", cartId)

try {

    const userData: shippingAddressType = {
      shippingAddress: {
        details: value.details,
        phone: value.phone,
        city: value.city,
      }
    }

    if (value.paymentMethod === "cash") {

      const res = await createCashOrder(cartId, userData)

      // console.log("API Response:", res)

      if (res.status === "success") {
        setcartData(null)
        setnumOfCartItems(0)

        toast.success("order created" , { position: "top-center" })
      } else {
        toast.error("ERRORRR", { position: "top-center" })
      }
    }else{
      const res = await createVisaOrder(cartId, userData)
      console.log(res);
       if (res.status === "success") {
    window.location.href = res.session.url
  }
      
    }

  } catch (error) {
    console.log("Payment Error:", error)
    toast.error("Something went wrong")
  }
        
    }
  return <>
  
  <h1 className="text-center text-5xl my-10 font-semibold">Payment</h1>

    <div className="container max-w-5xl mx-auto">
      <form
        onSubmit={form.handleSubmit(handlePayment)}
        className="space-y-6"
      >

        {/* Details */}
        <Controller
          name="details"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Details</FieldLabel>

              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your details"
                autoComplete="off"
                className="w-full"
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone</FieldLabel>

              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your phone"
                autoComplete="off"
                className="w-full"
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* City */}
        <Controller
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>City</FieldLabel>

              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your city"
                autoComplete="off"
                className="w-full"
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Payment Method */}
        <div className="space-y-4">
          <p className="font-medium">Payment Method</p>

          <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer bg-gray-100">
            <input
              type="radio"
              value="cash"
              {...form.register("paymentMethod")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer bg-gray-50">
            <input
              type="radio"
              value="visa"
              {...form.register("paymentMethod")}
            />
            Pay Online (Visa)
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Pay NOW
        </button>
      </form>
    </div>
  </>
}

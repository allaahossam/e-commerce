import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import session from './../../node_modules/next-auth/core/routes/session.d';

export const nextAuth : NextAuthOptions = {
    providers: [
        Credentials({
            credentials:{
                email:{},
                password:{}
            },
            authorize: async function (credentials){

                const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin` , {
                method:"post",
                body:JSON.stringify(credentials),
                headers:{
                  "content-type":"application/json"
                },
      
    })

    const finalData = await res.json()

    console.log(finalData);
    if (finalData.message== "success") {
        return {
            ...finalData.user,
            realToken: finalData.token
        }
    }else{
        return null
    }
    
     }
        })
        

    ],

    // callbacks : {
    //     jwt(params) {
            
            

    //         if (params.user) {
    //             params.token.realToken = params.user.realToken
    //         }
    //         return params
    //     },

    //      session(params) {
    //          console.log("params" , params);

    //          return params.session
    //      },
    // },

   

    // pages:{
    //     signIn:"/login"
    // }


    callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.realToken = user.realToken;
      }
      return token; // ✅ return token, NOT params
    },

    session({ session, token }) {
      session.user.realToken = token.realToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
}
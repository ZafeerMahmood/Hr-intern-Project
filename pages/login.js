import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";

export default function Login()
{

    const router =useRouter();
    const [email,setEmail] = useState('');
const [password,setPassword]=useState('');

    return(
        <div>
              <input type="email" id="email"  name="email" onChange={(e) => setEmail(e.target.value)}  className=" bg-slate-500 input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 " placeholder="Email address" 
   autoComplete="on" value={email}   required />

<input type="Password" onChange={(e) => setPassword(e.target.value)}  id="password" name="password"  className=" bg-slate-500 input  peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-full border border-double  border-white focus:border-[#3D4E42]    outline-none peer p-2 " placeholder='Password' minLength="8" autoComplete="on"  value={password}  required />


<button className="rounded-md   bg-slate-500 hover:bg-[#465B4D]  w-52 h-10 text-lg font-semibold btn hover:text-[#5EAC74]  text-black  " onClick={()=> login (email,password)} type="submit"  >Login <br/></button>
<p className="text-[#465B4D] text-sm leading-loose">Setup a personal account for someone?  <button className="text-sm text-[#0b2b16] hover:underline hover:text-[#5EAC74]"  onClick={()=>router.push("/signup")}>Sign up for an entity account </button></p>
      
<div className="flex min-h-screen flex-col items-center justify-center py-2">
      

      <input
        type="file"
        accept="image/*"
        className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        onChange={(e) => {
          handle_cnic(e); 
        }}
      />
    </div>
      
        </div>
    )




    async function login  (email,password) 
{   
       const {data,error} =await supabase.auth.signIn({email,password})
 
      
       if(error) {
           errorfun();
           document.getElementById('email').value = '';
           document.getElementById('password').value = '';
          
       } 
       else{
      
       success();
       router.push("/");
     
    
       }  
     }
    
     function errorfun() {
        Modal.error({
          title: 'Unsuccessful',
          content: 'Try Again',
        });
      }

      
    function success() {
        Modal.success({
          title: 'Login Successful',
          content: 'Logged In',
        });
      }


// Bucket creation 

       async function handle_cnic (e)
      {
      
        let file;

        if (e.target.files) {
          file = e.target.files[0];
        }

        const { data, error } = await supabase.storage
      .from("cnic.front")
      .upload("public/" + file?.name,file , {
        cacheControl: '3600',
        upsert: false,
      })
      if (data) {
        console.log(data);
      } else if (error) {
        console.log(error);
      }

    //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
    const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl(`public/${file.name}`)
      console.log(publicURL);
      }
}



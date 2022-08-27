import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";

export default function Home() {
  const router =useRouter();
  return (
   <div>
         <button
                className="  bg-transparent   hover:tracking-tighter    text-[#DBE3D6]  w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg  hover:text-[#5EAC74] "
                onClick={()=>router.push("/addemployees")}
              >
                Add Employee
              </button>

                      
   </div>
  )
}

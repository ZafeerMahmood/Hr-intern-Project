import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";

export default function addemployees() {
  const router =useRouter();

  return (
   <div>
      Cnic
           <input type="tel" id="cnic" name="cnic"  className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
         placeholder="Cnic" autoComplete="off" pattern="[0-9]{0,50}" required
                    />
                  Full Name
                       <input type="text" id="fullname" name="fullname"className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Full Name" autoComplete="off" pattern="[A-Za-z\s]{0,50}" required/>
      Email
<input type="text" id="email" name="email"className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Email" autoComplete="off" pattern="[A-Za-z\s]{0,150}" required/>
  Adress Mail
<input type="text" id="adr_mail" name="adr_mail" className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Address Mail" autoComplete="off"  required/>
  Address Home
<input type="text" id="adr_home" name="adr_home"className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Address Home" autoComplete="off"  required/>
Qualification
<input type="text" id="qulaification" name="qulaification" className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Qulaification" autoComplete="off"  required/>
Skills
<input type="text" id="Skills" name="Skills" className="  input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10  w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
 placeholder="Skills" autoComplete="off"  required/>
  
  {/* cnic front */}
  Cnic Front
  <input
        type="file" accept="image/*" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_cnic_front(e); 
        }}
      />
Cnic Back
{/* cnic back */}
<input
        type="file" accept="image/*" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_cnic_back(e); 
        }}
      />
  
{/* certification */}
Certification
  <input
        type="file" accept=".pdf" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
          handle_certification(e);
        }}
        multiple required
      />

      {/* documnetation */}
      Documnetation
  <input
        type="file" accept=".doc, .pdf" className="block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
       id="file_input"
        onChange={(e) => {
         
        }}
        multiple required
      />
  
  
  
   </div>

   
  )
  
  async function handle_cnic_front (e)
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
const { publicURL } = supabase.storage.from('cnic.front').getPublicUrl(`public/${file.name}`)
  console.log(publicURL);
  }


  async function handle_cnic_back (e)
  {
  
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
  .from("cnic.back")
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
const { publicURL } = supabase.storage.from('cnic.back').getPublicUrl(`public/${file.name}`)
  console.log(publicURL);
  }
}

async function handle_certification (e)
{
  console.log(e.target.files);
  console.log("Hello");
  console.log(e.target.files.length);
  const file = [] ;

  for(let i=0; i<e.target.files.length;i++)
  {
    if (e.target.files) {
      file[i] = e.target.files[i];
      console.log(123);
      console.log(file[i]);
    }
  }
  console.log(2456);
  console.log(file);
  
for(let i=0;  i<e.target.files.length;i++)
{
  const { data, error } = await supabase.storage
.from("certification")
.upload("public/" + file[i]?.name,file[i] , {
  cacheControl: '3600',
  upsert: false,
})
if (data) {
  console.log(data);
} else if (error) {
  console.log(error);
}
}

//  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
const { publicURL } = supabase.storage.from('certification').getPublicUrl(`public/${file.name}`)
console.log(publicURL);
}
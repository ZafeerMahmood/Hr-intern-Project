
import React from "react";
import { supabase } from "../../database/Database";
import Layout2 from "../../components/Layout2";




const Emp_Details  = ({employee } ) =>
{
    
   
     return(
        <div >
        <Layout2 />
        <div className="  flex flex-col  h-1/4 justify-center bg-[#ECEBEB]   items-center ">
          <div className="relative  flex flex-col  rounded-lg h-fit w-[900px] justify-center bg-[#ECEBEB] items-center shadow-md shadow-stone-800   ">
            {" "}
            <div className="flex flex-col h-fit w-[413px] my-[146px]  justify-center items-center leading-[55px] ">
              {"Your Name "}
              
              <div className=" text-base text-[#C4C4C4] font-bold">
                {employee.emp_fullname}{" "}
              </div>{" "}
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
             {" Skills"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.emp_skills}{" "}
              </div>{" "}
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {" Qualification "}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.emp_qualification}
              </div>{" "}
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {" Cnic"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.emp_cnic}
              </div>{" "}
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {"Email"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.personal_email}
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {"Home Address"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.addr_home}
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
             {" Mailing Address"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.addr_mail}
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {"Joining Date"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.joined_on}
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {"Contract Expiry Date"}
              <div className="font-bold text-base text-[#C4C4C4]">
                {employee.departure_on}
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {" Cnic Front"}
              <div className="font-bold text-base text-[#C4C4C4]">
                <img
                  className="rounded-lg  text-base text-[#C4C4C4]"
                  src={employee.cnic_front}
                  width={200}
                  height={25}
                />
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {"Cnic Back"}
              <div>
                <img
                  className="rounded-lg text-base text-[#C4C4C4] "
                  src={employee.cnic_back}
                  width={200}
                  height={25}
                />
              </div>
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
             {"Certifications"} <div> </div>
              <div>
                <a
                  className="  text-base  text-[#C4C4C4] hover:text-gray-700"
                  key={employee.id}
                  href={`/see_pdf/${employee.id}`}
                >
                  Certifiction.pdf{" "}
                </a>
              </div>{" "}
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
              {"Degree's"}
              <div>
                <a
                  className=" text-base text-[#C4C4C4] hover:text-gray-700 "
                  key={employee.id}
                  href={`/see_pdf1/${employee.id}`}
                >
                  Degree.pdf{" "}
                </a>
              </div>{" "}
              <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
            </div>
          </div>
        </div>{" "}
      </div>
     )
}
export default Emp_Details

export async function getStaticPaths() 
{
    const {data:employee} = await supabase.from("employees").select('id');
   const paths= employee.map(({id}) =>({
        params :
        {
            id:id.toString(),
        },
    }));

    return {
       paths ,
       fallback : false
      }


};

 export async function getStaticProps({params : {id}})
{
  
    const {data:employee} = await supabase.from ('employees').select('*').eq('id',id).single()
    return {
        props: { employee }, 
      }
}

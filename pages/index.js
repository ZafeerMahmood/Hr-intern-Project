
import React, { useContext ,useState,useEffect} from "react";
import "antd/dist/antd.css";
import  { Context } from "../database/authContext";
import Home from "../components/Home";
import Emp from '../components/Emp'
import { useRouter } from "next/router";


export default  function Index({}) {

  const router =useRouter();
  const { user, role, uuid ,emp} = useContext(Context)
  console.log(user,role,"inside")
  const [loggedIn, setLoggedIn] = useState(role)

  useEffect(()=> {
    if(user===null){
      router.push('/login')
    }
      
    setLoggedIn(role)
  }, [role])

  useEffect(()=> {
    
    if(loggedIn==='employee'){
      router.push('/Emp')
    }
    if(loggedIn==='admin'){
      router.push('/Adm')
    }
      
  }, [])

 
    

  return (
    <div>
       Loading
     </div>
  );
}


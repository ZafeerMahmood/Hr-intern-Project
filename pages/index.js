
import React, { useContext ,useState,useEffect} from "react";
import "antd/dist/antd.css";
import  { Context } from "../database/authContext";
import Home from "../components/Home";
import Emp from '../components/Emp'


export default  function Index({}) {

  const { user, role, uuid ,emp} = useContext(Context)
  console.log(emp)
  const [loggedIn, setLoggedIn] = useState('employee')

  useEffect(()=> {
    setLoggedIn(role)
  }, [role])

  return (
    <div>
        {loggedIn=='employee'? <Emp /> : <Home/>}
     </div>
  );
}


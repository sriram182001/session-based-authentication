import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';
import Mspc from './components/mspc';
import Nopage from './components/nopage'
import React from 'react';
import {useEffect,useState} from 'react';
import Axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
//import { CookiesProvider } from 'react-cookie';
function App() {
  //loading = true
  // make api call to get user details
  // set loggedIn status in redux
  //if(loading) return 'I am loading';
  
  const dispatch=useDispatch();
  const flag=useSelector(state=>state.loggedIn)
  console.log(flag)
  //const[isloggedin,setloggedin]=useState(false)
  useEffect(()=>{
    
    async function apicall(){
      try{
      const response=await Axios.get('http://localhost:3000/api/authenticate'); //401
      console.log(response.data)
      dispatch({type:'CHECK_LOGIN',loggedIn:response.data})
      }
      catch(err){
        console.log(err);
        dispatch({type:'CHECK_LOGIN',loggedIn:false})
      }
    }
  apicall();  
},[]) 

  return (
  <div className='App'>
    <h1><b>Cookie Based Authentication</b></h1>
    <BrowserRouter>
    
    {/* <nav>
        <ul>
          <li>
            <Link to="/"><b>Home</b></Link>  
          </li>
  
          <li>
            <Link to="/signin"><b>SignIn</b></Link>
          </li>
         
          <li>
            <Link to="/signup"><b>SignUp</b></Link>
          </li>
        </ul>
    </nav> */}
    
    <Routes>
    {(flag===false)?<Route path="/" element={<Home/>}/>:<Route path='/Mspc' element={<Mspc/>}/>}
    {(flag===false)?<Route path="/signin" element={<SignIn />}/>: <Route path='/Mspc' element={<Mspc/>}/>}
    {(flag===false)?<Route path="/signup" element={<SignUp />}/>:<Route path='/Mspc' element={<Mspc/>}/>}
   
    <Route path='*' element={<Nopage/>}/>
    </Routes>  
</BrowserRouter>

</div>  

  );
}

export default App;

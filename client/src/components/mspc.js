import Axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mspc.css'
import {useState,useEffect}  from 'react';
import { useDispatch } from 'react-redux';

function Mspc(){
    let navigate=useNavigate();
    const dispatch=useDispatch();
    const logout=async()=>{
        const response=await Axios.get('http://localhost:3000/api/logout');
        console.log(response)
        if(response.data==='loggedout'){
            dispatch({type:'CHECK_LOGIN',loggedIn:false});
            navigate('/signin')
        }
    }
    const[details,setdetails]=useState({
        value:{},
        flag:false
    });
    useEffect(()=>{
    async function fetchdata(){
        const response=await Axios.get('http://localhost:3000/api/getdetails');
        //console.log(response.data)
        setdetails({value:response.data,flag:true});
    }
    fetchdata()},[]);
    const a= 
    <div className="Mspc">
    <br />
    <h1><i>Logged in page</i></h1>
    <button className='btn' onClick={logout}>LOGOUT</button>
    <br />
    <br />
    <p style={{textAlign:"center"}}>This page will be destroyed after a minute of inactivity.</p>
    <br />
    <br />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum blanditiis dolorem amet nemo, cumque fugiat excepturi expedita quas, recusandae ad, aut nobis officia enim! Obcaecati nemo nulla molestiae expedita!</p>
    <br />
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus voluptas sequi temporibus repellendus doloribus id culpa nam, impedit minima nostrum molestiae quo odit? Non impedit totam sequi iste maxime.</p>
    

    {(details.flag===false)?<h1>...Loading</h1>:<p>{details.value.name} is logged in and his email-id is {details.value.mailid}</p>}
    </div>
    return(
       a
    )
}
export default Mspc;
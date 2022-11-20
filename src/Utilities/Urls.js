import { useSelector } from "react-redux";

import axios from 'axios'




export const Url = axios.create({
    baseURL: `https://kinkhelpoint.thriftlynepal.com/api/v1/user`,
  
})  

    

export const TokenUrl =()=>{
    const token = (JSON.parse(localStorage.getItem("state")))?.authToken?.authToken
    const site = (JSON.parse(localStorage.getItem("state")))?.site?.site
   
    
    return axios.create({
        baseURL: `https://kinkhelpoint.thriftlynepal.com/api/v1/user`,
        headers:{
            "Authorization":`Bearer ${token}`,
            "site" : site,
            'Access-Control-Allow-Origin': 'https://kinkhelpoint.thriftlynepal.com/api/v1/user'
        }
      
    })
} 


export const  GameImgUrl ="https://kinkhelgame.thriftlynepal.com/"
export const  ImgUrl ="https://kinkhelpoint.thriftlynepal.com/"
export const  ImgUrl2 ="http://localhost:6001/"


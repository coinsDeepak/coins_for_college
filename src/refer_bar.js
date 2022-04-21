import React,{useState,useRef} from "react";
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { FaPlus,FaUserAlt} from "react-icons/fa";

export default function Refer_price_bar(){

    return(

<div style={{display:'flex'}}>
               
               <div style={{flexDirection:'row',width:'50%'}}>
                   <Button style={{marginTop:10,backgroundColor:'#14A9FF',borderColor:'#14A9FF'}}><FaPlus size={15} color="white" /><small style={{marginLeft:10}}>Refer</small></Button>
                   <small style={{fontSize:15,marginLeft:20,paddingTop:10,color:'#14A9FF'}}>How it works?</small>
               </div>

               <div style={{width:'50%',display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                   
                   <div>
                   <Button style={{marginTop:10,backgroundColor:'rgba(247, 148, 29, 0.2)',borderWidth:0,marginRight:10}}><small style={{marginLeft:10}} className="text-dark font-weight-bold">Total Referal 12</small></Button>
                   </div>

                   <div>
                   <Button style={{marginTop:10,backgroundColor:'rgba(20, 169, 255, 0.2)',borderWidth:0}}><small style={{marginLeft:10}} className="text-dark font-weight-bold">Rate of earning 10 Coins/day</small></Button>
                   </div>

               </div>
           
           </div>
    )

}

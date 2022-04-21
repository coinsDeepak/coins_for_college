import React,{useState,useRef} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Button  from "react-bootstrap/Button";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaSearch,FaRegBell } from "react-icons/fa";

export default function Header(){

    var coinValue = useState(15);

    return(
        <>
   <Nav style={{width:'100%',alignItems:'flex-end'}} className="nav navbar-nav ml-auto">
       <div style={{flexDirection:'row'}}>
        <Button style={{backgroundColor:'#feca57',borderWidth:0,borderRadius:5,elevation:10}} className="text-dark font-weight-bold">Current Value : {coinValue}</Button>
         {/* <FaSearch style={{marginLeft:10}} size={20} color="#95a5a6" />
         <FaRegBell style={{marginLeft:10}} size={20} color="#95a5a6" /> */}
         <img height={25} width={25} style={{borderRadius:10,backgroundColor:'red',marginLeft:10}} />
        
        <small style={{marginLeft:10,fontSize:20}}>Deepak Mishra</small>
        
    </div>
    </Nav>
        </>
    )
}
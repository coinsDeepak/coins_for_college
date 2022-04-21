import React,{useState,useRef} from "react";
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { FaCheckSquare } from "react-icons/fa";

export default function Create_question_1(){

    var questionData = [{
        question:"01",
    },
    {
        question:"02",
    },
    {
        question:"03",
    },
    {
        question:"04",
    },
    {
        question:"05",
    },
    {
        question:"06",
    },
    {
        question:"07",
    },
    {
        question:"08",
    },
    {
        question:"09",
    },
    {
        question:"10",
    },
    {
        question:"11",
    },
    {
        question:"12",
    },
    {
        question:"13",
    },
    {
        question:"14",
    },
    {
        question:"15",
    },
    {
        question:"16",
    },
    {
        question:"17",
    },
    
];

    return(
        <>
               <Header />

        <div>
            <h2>Question Paper</h2>
        </div>
&nbsp;

<div style={{flexDirection:'row',opacity:0.7}}>
    
<span style={{marginRight:20}}>
<small style={{marginRight:10,fontSize:20}}>Grade</small>

<select style={{borderWidth:0.2,borderRadius:5,opacity:0.7}}>
    <option>a</option>
    <option>b</option>
    <option>c</option>
    <option>d</option>
    <option>e</option>
</select>
</span>

<span style={{marginRight:20}}>
<small style={{marginRight:10,fontSize:20}}>Subjects</small>
<select style={{borderWidth:0.2,borderRadius:5,opacity:0.7}}>
    <option>Maths</option>
    <option>Science</option>
    <option>Physics</option>
    <option>Chemistry</option>
</select>
</span>

{/* margin Right has some issue */}

<span style={{marginRight:20}}>
<small style={{marginRight:10,fontSize:20}}>Tags</small>
<input style={{borderRadius:5,borderWidth:0.1,opacity:0.5}} value={"#physics"} type="text" name="name" />
</span>

<span style={{marginLeft:20}}>
<small style={{marginRight:10,fontSize:20}}>Topic</small>
<input style={{borderRadius:5,borderWidth:0.1,opacity:0.5}} value={"Algebra"} type="text" name="name" />
</span>

<span style={{marginLeft:20}}>
<small style={{marginRight:10,fontSize:20}}>Alignment</small>
<select style={{borderWidth:0.2,borderRadius:5,opacity:0.7}}>
    <option>CBSE</option>
    <option>ICSE</option>
</select>
</span>
</div>
&nbsp;
&nbsp;

<Nav style={{width:'100%',marginTop:20,alignItems:'flex-start'}} className="nav navbar-nav">
       <div style={{flexDirection:'row'}}>
        <Button style={{marginLeft:20,borderWidth:0}} className="btn btn-outline-info bg-white">Crete on your own</Button>
        </div>
</Nav>
&nbsp;

<div>

<textarea style={{width:'100%',height:100,opacity:0.5,borderWidth:0.2,borderRadius:5}}>
    Type your Question Here
</textarea>
&nbsp;

{/* starting of the row */}
<div>
<small>Option A <FaCheckSquare size={20} color="#14A9FF" /></small>
<div>
<textarea style={{width:'50%',height:50,opacity:0.5,borderWidth:0.2,borderRadius:5,marginTop:10}}>
    Option A
</textarea>
</div>
</div>

{/* starting of the row */}
<div>
<small>Option B <FaCheckSquare size={20} color="#14A9FF" /></small>
<div>
<textarea style={{width:'50%',height:50,opacity:0.5,borderWidth:0.2,borderRadius:5,marginTop:10}}>
    Option B
</textarea>
</div>
</div>

{/* starting of the row */}
<div>
<small>Option C <FaCheckSquare size={20} color="#14A9FF" /></small>
<div>
<textarea style={{width:'50%',height:50,opacity:0.5,borderWidth:0.2,borderRadius:5,marginTop:10}}>
    Option C
</textarea>
</div>
</div>

{/* starting of the row */}
<div>
<small>Option D <FaCheckSquare size={20} color="#14A9FF" /></small>
<div>
<textarea style={{width:'50%',height:50,opacity:0.5,borderWidth:0.2,borderRadius:5,marginTop:10}}>
    Option D
</textarea>
</div>
</div>

</div>

    </>
    );
}
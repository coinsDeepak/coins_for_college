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
        <Button style={{marginLeft:20,borderWidth:0,borderWidth:0.2,borderColor:'#F7941D'}} className="btn btn-outline bg-white"><small className="classes">01</small></Button>
        
        {questionData.map((val,index)=><span>
            <Button style={{marginLeft:20,borderWidth:0,borderWidth:0.2,borderColor:'#F7941D'}} className="btn btn-outline bg-white"><small className="classes">{val.question}</small></Button>
        </span>)}
        
        </div>
</Nav>
&nbsp;
<div style={{borderRadius:10}} className="border" >
<div style={{padding:20}}>

<h5 className="my-2" style={{width:'100%',opacity:0.8}}>
    Cupidatat elit cillum sunt culpa ea culpa. Adipisicing qui consequat qui minim nisi qui est mollit non elit amet eu velit duis. Velit do consequat Lorem ad et enim sit amet non. Dolore labore est culpa officia. Culpa aliqua occaecat esse est occaecat consequat cupidatat mollit incididunt Lorem duis excepteur eu. Irure velit occaecat enim ullamco dolore incididunt tempor in.
</h5>
&nbsp;
<div>
<small style={{opacity:0.7}}>Option A</small>
<div>
<small style={{fontSize:20}}>10</small>
</div>
</div>

<div>
<small style={{opacity:0.7}}>Option B</small>
<div>
<small style={{fontSize:20}}>20</small>
</div>
</div>


<div>
    <small style={{opacity:0.7}}>Option C</small>
    <div>
    <small style={{fontSize:20}}>20</small>
    </div>
    </div>


<div>
    <small style={{opacity:0.7}}>Option D</small>
    <div>
    <small style={{fontSize:20}}>30</small>
    </div>
    </div>




</div>
</div>

&nbsp;
<Button style={{marginTop:10,backgroundColor:'#14A9FF',borderColor:'#14A9FF'}}><small>Next Question</small></Button>

    </>
    );
}
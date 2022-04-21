import React,{useState,useRef} from "react";
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { FaCheckSquare } from "react-icons/fa";
import './App.css';

export default function Perivious_question(){

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
            <h2>Question Perivius Paper - 2</h2>
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

<Nav style={{width:'100%',marginTop:20,alignItems:'flex-start'}} className="nav navbar-nav">
       <div style={{flexDirection:'row'}}>
        <Button style={{marginLeft:20,borderWidth:0,borderWidth:0.2,borderColor:'#F7941D'}} className="btn btn-outline bg-white"><small className="classes">01</small></Button>
        
        {questionData.map((val,index)=><span>
            <Button style={{marginLeft:20,borderWidth:0,borderWidth:0.2,borderColor:'#F7941D'}} className="btn btn-outline bg-white"><small className="classes">{val.question}</small></Button>
        </span>)}
        
        </div>
</Nav>
&nbsp;
<Nav style={{width:'100%',marginTop:20,alignItems:'flex-start'}} className="nav navbar-nav">
       <div style={{flexDirection:'row'}}>
        <Button style={{marginLeft:20,borderWidth:0,opacity:0.5}} className="btn btn-outline-info bg-white">Create Your Own</Button>

        <Button style={{marginLeft:20,borderWidth:0}} className="btn btn-outline-info bg-white">Select From Your Previous Question</Button>

        <Button style={{marginLeft:20,borderWidth:0,opacity:0.5}} className="btn btn-outline-info bg-white">Select From Question Bank</Button>
        </div>
</Nav>
&nbsp;

<div className="border">
  
    <div className="row text-center">
        <div className="col-8">
            <small style={{opacity:0.8}}>Nisi ullamco tempor nostrud et officia qui mollit ipsum sunt eu in commodo. Irure ullamco elit incididunt eu. Laborum fugiat est eiusmod nulla fugiat. Excepteur enim quis culpa dolor ipsum nulla consectetur duis adipisicing ad ad.</small>
        </div>

        <div className="col-2">
        <Button style={{}} className="selectButton"><small className="text-white">Select</small></Button>
        </div>
    </div>

            &nbsp;
    <div className="row">
        <div className="col-12">

        <small style={{marginLeft:10,marginRight:10,fontSize:16}} className="classes border">Grade</small>

        <small style={{marginRight:10,fontSize:16}} className="classes border">Physics</small>

        <small style={{marginRight:10,fontSize:16}} className="classes border">Friction</small>

        <small style={{marginRight:10,fontSize:16}} className="classes border">CBSE</small>
        
        </div>
    </div>

</div>

    </>
    );
}
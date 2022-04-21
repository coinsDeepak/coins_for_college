import React,{useState,useRef} from "react";
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";

export default function Create_question(){

    var navigate = useNavigate();

    var dataMain = [
        {
            Grade : "10",
            Subject:"Physics",
            Topic:"Friction",
            Created_By : "James Arthur",
            Dated_Added : "Jan 01 2022"
        },
        {
            Grade : "07",
            Subject:"Chemistry",
            Topic:"Synthetic",
            Created_By : "Casey Arthur",
            Dated_Added : "Jan 05 2022"
        },

        {
            Grade : "03",
            Subject:"Math",
            Topic:"Algebra",
            Created_By : "Two Much",
            Dated_Added : "Jan 08 2022"
        },

        {
            Grade : "10",
            Subject:"Physics",
            Topic:"Friction",
            Created_By : "James Arthur",
            Dated_Added : "Jan 01 2022"
        },
    ];

    return(
        <>
            
            <Header />

            <div>
                <h2>Question Paper</h2>
            </div>
            &nbsp;
            <div>
                <Button className="font-weight-bolder" onClick={()=>{ navigate('/create_question_1'); }} style={{borderRadius:10}}>Create New Question Paper</Button>
            </div>
            &nbsp;
            <div>
                <h5>Previous Question Papers</h5>
            </div>
        &nbsp;
        <div>

        <Nav style={{width:'100%',alignItems:'flex-end'}} className="nav navbar-nav ml-auto">
       <div style={{flexDirection:'row'}}>
        <small style={{opacity:0.7}}>Filter By</small>
        <Button style={{marginLeft:20,borderWidth:0}} className="btn btn-outline-info bg-white">Created By Other</Button>
        </div>
    </Nav>

        &nbsp;

        <Table striped bordered hover>

  <tbody>

    <tr>
      <td style={{opacity:'0.5'}}>Grade</td>
      <td style={{opacity:'0.5'}}>Subject</td>
      <td style={{opacity:'0.5'}}>Topic</td>
      <td style={{opacity:'0.5'}}>Created By</td>
      <td style={{opacity:'0.5'}}>Date Added</td>
    </tr>

        {dataMain.map((val,index)=><tr>
      <td style={{opacity:'0.5'}}>{val.Grade}</td>
      <td style={{opacity:'0.5'}}>{val.Subject}</td>
      <td style={{opacity:'0.5'}}>{val.Topic}</td>
      <td style={{opacity:'0.5'}}>{val.Created_By}</td>
      <td style={{opacity:'0.5'}}>{val.Dated_Added}</td>
    </tr>
        )}

  </tbody>
</Table>

        </div>

        </>
    )
}
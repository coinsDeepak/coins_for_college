import React,{useState,useRef} from "react";
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { FaPlus,FaUserAlt} from "react-icons/fa";
import Refer_price_bar from "./refer_bar";

export default function Referrals(){

    var navigate = useNavigate();

    var dataMain = [
        {
            id : "01",
            name:"Fredick",
            login_streak:"28",
            coin_earned : "35",
        },
        {
            id : "02",
            name:"Fredick",
            login_streak:"35",
            coin_earned : "35",
        },
        {
            id : "03",
            name:"Fredick",
            login_streak:"49",
            coin_earned : "35",
        },
        {
            id : "04",
            name:"Fredick",
            login_streak:"56",
            coin_earned : "35",
        },
        {
            id : "05",
            name:"Fredick",
            login_streak:"96",
            coin_earned : "35",
        },
        
    ];

    return(
        <>
            
            <Header />

            <div>
                <h2>Referrals</h2>
            </div>
            &nbsp;
            <Refer_price_bar />
            &nbsp;

        <div style={{marginTop:30,display:'flex'}}>

            <div style={{width:'50%'}}>
            <small style={{fontSize:20,opacity:0.5}}>
            Your Referrals
            </small>
            </div>

            <div style={{width:'50%',display:"flex",justifyContent:'flex-end'}}>
            <small style={{fontSize:20,opacity:0.9}}>
            <div style={{flexDirection:'row'}}>
        <small style={{opacity:0.7}}>Filter By</small>
        <Button style={{marginLeft:20,borderWidth:0}} className="btn btn-outline-info bg-white">Active</Button>
        </div>
        </small>
        </div>

        </div>

        <div>

        &nbsp;

        <Table striped bordered hover>

  <tbody>

    <tr>
      <td style={{opacity:'0.5'}}>#</td>
      <td style={{opacity:'0.5'}}>Name</td>
      <td style={{opacity:'0.5'}}>Login Streak</td>
      <td style={{opacity:'0.5'}}>Coin Earned</td>
      <td style={{opacity:'0.5'}}></td>
    </tr>

        {dataMain.map((val,index)=><tr>
      <td style={{opacity:'0.5'}}>{val.id}</td>
      <td style={{opacity:'0.5'}}>{val.name}</td>
      <td style={{opacity:'0.5'}}>{val.login_streak}</td>
      <td style={{opacity:'0.5'}}>{val.coin_earned}</td>
      <td>
      <Button style={{marginTop:10,backgroundColor:'#14A9FF',borderColor:'#14A9FF'}}><FaUserAlt size={15} color="white" /><small style={{marginLeft:10}}>View Profile</small></Button> 
      </td>
    </tr>
        )}

  </tbody>
</Table>

        </div>

        </>
    )
}
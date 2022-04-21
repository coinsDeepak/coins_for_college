import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Header from "./header";
import Table from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { FaClose,FaWindowClose} from "react-icons/fa";
import Refer_price_bar from "./refer_bar";
import Modal from 'react-modal';
import '../node_modules/animate.css/animate.min.css';
import $ from "jquery";
import Image from 'react-bootstrap/Image'
import WhatsApp from './assets/WhatsApp.png';
import Twitter from './assets/Twitter.png';
import Gmail from './assets/Gmail.png';
import Facebook from './assets/Facebook.png';

export default function Referrals_inactive(){

    var navigate = useNavigate();

    // const customStyles = {
    //     content: {
    //       top: '50%',
    //       left: '50%',
    //       right: 'auto',
    //       bottom: 'auto',
    //       marginRight: '-50%',
    //       transform: 'translate(-50%, -50%)',
    //       },
    // };
      
    var dataMain = [
        {
            id : "01",
            name:"Fredick",
            login_streak:"28",
            coin_earned : "35",
            ping:"true",
        },
        {
            id : "02",
            name:"Fredick",
            login_streak:"35",
            coin_earned : "35",
            ping:"false",
        },
        {
            id : "03",
            name:"Fredick",
            login_streak:"49",
            coin_earned : "35",
            ping:"false",
        },
        {
            id : "04",
            name:"Fredick",
            login_streak:"56",
            coin_earned : "35",
            ping:"false",
        },
        {
            id : "05",
            name:"Fredick",
            login_streak:"96",
            coin_earned : "35",
            ping:"false",
        },
        
    ];

    let subtitle;
    const [modalOpen, setOpenModal] = useState(false);
      
    function openModal() {
        setOpenModal(true);
    }
      
    function closeModal() {
        setOpenModal(false);
    }

    return(
        <>
            
            <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        
        className="animate__animated animate__flipInX Modal"
        contentLabel="Example Modal"
    
      >
        <div className="insideModal">
            {/* Share Header  */}
        
        <div  style={{display:'flex',margin:10}}>
            <div style={{width:'90%'}}>
                <small style={{fontSize:20,}}>Referals</small>
            </div>

            <div className="text-center" style={{width:'10%'}}>
                <button onClick={closeModal} style={{borderWidth:0}}>
            <FaWindowClose  size={20} color="#95a5a6" />
            </button>
            </div>
        </div>
        &nbsp;
        {/* Copy Link Side */}
        <div  style={{display:'flex',margin:10}}>

            <div style={{width:'80%',opacity:0.7}}>
            <input style={{borderRadius:5,width:'100%',borderWidth:0.01,opacity:0.9}} value={"coinsofcollege.org/refreal/id=123"} type="text" name="name" />
            </div>

            <div className="text-center" style={{width:'20%'}}>
            <small style={{backgroundColor:'#14A9FF',padding:5,borderRadius:5}} className="text-white">Copy Link</small>
            </div>
        </div>
    &nbsp;
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',opacity:0.7}}>
    <small  className="text-dark">(or)</small>
    </div>
    &nbsp;
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',opacity:0.7}}>
    <small  className="text-dark">Share the link</small>
    </div>
    &nbsp;
   
    <div  style={{display:'flex',margin:10}}>

    <div className="text-center" style={{width:'25%',opacity:0.7}}>
       <Image className="" src={WhatsApp} fluid={true} /> 
    </div>

    <div className="text-center" style={{width:'25%',opacity:0.7}}>
       <Image className="" src={Twitter} fluid={true} /> 
    </div>

    <div className="text-center" style={{width:'25%',opacity:0.7}}>
       <Image className="" src={Gmail} fluid={true} /> 
    </div>

    <div className="text-center" style={{width:'25%',opacity:0.7}}>
       <Image className="" src={Facebook} fluid={true} /> 
    </div>

    </div>

        {/* End of the modal */}
        </div>

      </Modal>

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
            <Button style={{marginLeft:20,borderWidth:0}} className="btn btn-outline-info bg-white">inActive</Button>
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
      <td style={{opacity:'0.5'}}>Coin Earned</td>
      <td style={{opacity:'0.5'}}></td>
      <td style={{opacity:'0.5'}}></td>
    </tr>

{/* dynamic data start from here */}
        {dataMain.map((val,index)=>{
        if(val.ping == "true"){
                return(
                    <tr>
                <td style={{opacity:'0.8'}}>{val.id}</td>
                <td style={{opacity:'0.8'}}>{val.name}</td>
                <td style={{opacity:'0.8'}}>{val.coin_earned}</td>
                    <td>
                      <small style={{color: 'rgba(247, 148, 29, 1)'}}>Pinged</small>
                    </td>
                <td>
                <Button style={{marginTop:10,backgroundColor:'white',borderWidth:0}}><small style={{color:'#14A9FF'}}>View Profile</small></Button> 
                </td>

            </tr>
            );
            }
            else{
                return(
                    <tr>
                <td style={{opacity:'0.8'}}>{val.id}</td>
                <td style={{opacity:'0.8'}}>{val.name}</td>
                <td style={{opacity:'0.8'}}>{val.coin_earned}</td>
                    <td>
                <Button  onClick={openModal} style={{marginTop:10,backgroundColor:'#14A9FF',borderWidth:0}}><small>Ping</small></Button> 
                </td>
            <td>
            <Button style={{marginTop:10,backgroundColor:'white',borderWidth:0}}><small style={{color:'#14A9FF'}}>View Profile</small></Button> 
            </td>

            </tr>
            );  
            }

        }

        )}
{/* dynamic data end */}

  </tbody>
</Table>

        </div>

        </>
    )
}
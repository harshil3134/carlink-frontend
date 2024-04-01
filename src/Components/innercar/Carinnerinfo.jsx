import React from 'react'
import { useState,useEffect } from 'react';
import './Carinnerinfo.css'
import Popup from '../Main_Renter/Popup'
import { User } from 'lucide-react'
import { CircleUserRound } from 'lucide-react';
import Heading from '../Heading';
import axios from "axios";
import toast,{ Toaster } from 'react-hot-toast';
function Carinnerinfo({data,info,vehicleid,sd,ed}) {
    const [bookingMessage, setBookingMessage] = useState('');

    const handleBookingClick = () => {
      setBookingMessage('Booking done Successfully....');
    };
    const [vdata,setvdata]=useState({});
    const moreInfo=data.moreInfo;
    const owner=data.owner;

    const [main,setMain]=useState("");




    const handlebooking = async (e) => {
       
        try {
            console.log("fun called");
          const { data } = await axios.post(
            "http://localhost:8000/api/v1/renter_reg/bookcar",
            {
                
                ownerid:owner,
                vehicleid:vehicleid,
                startdate:sd,
                enddate:ed,
                price:info.price,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
         
          toast.success(data.message);
          console.log(data.message);
         
          console.log(data);
          setBookingMessage('Booking done Successfully....');
          setTimeout(() => {
            // navigate(`/FormSection2/${data.vehicleid}`);
            // navigate("/formsection2");
          }, 2000);
         //setFlag(1);
        
        } catch (error) {
        //   toast.error(error);
        console.log(error);
        }
      };
    


    // useEffect(() => {
    //     if (data) {
    //         setvdata(data.moreInfo);
    //         setMain(data.moreInfo.main_image);
    //         console.log(main);
    //     }
    // }, [data]);
    const carimg=[
        {
        text:data.carName,
        img:"./images/maruti(2).JPG",
     
        }
        
    
    ]

    const carimgs=[
        {
        text:data.carName,
        img:"./images/maruti(2).JPG",
     
        }
    ]

  return (
    
    <>
    
    <div className='innerinfo'>
        <Toaster/>
        <div className='carinnerimage'>
        {console.log("datess",sd,ed)}
            
                <div>
                <p className='innercarname'>{data.carName}</p>
                <img src={info.main_image} className='innerimg' alt='main_image'></img>
                </div>
           
            
        </div>
        
        <h2>Exterior</h2>
        <div className='container_exterior'>
          
     
                <div  >
                
                <div className='exterior'>
                <img src={info.s_image_1} className='eximg'></img>
                </div>
                </div>
                <div  >
                
                <div className='exterior'>
                <img src={info.s_image_2} className='eximg'></img>
                </div>
                </div>
                
           
        </div>
        <h2>Interior</h2>
    
    <div className='container_exterior'>
          
    
            <div  >
                
                <div className='exterior'>
                <img src={info.s_image_3} className='eximg'></img>
                </div>
                </div>  <div  >
                
                <div className='exterior'>
                <img src={info.s_image_4} className='eximg'></img>
                </div>
                </div>

                
                
         
        </div>
        
        <div className='container_exterior'>
        <h2 className='segment_car'>Segment         :</h2>
     
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{info.segment}</p>
                </div>
                </div>
                
           
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Avaliable City  :</h2>
   
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{info.availableCity}</p>
                </div>
                </div>
                
         
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Fuel  :</h2>
        {fuel.map((d)=>(
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{info.fuelType}</p>
                </div>
                </div>
                
            ))}
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Transmission Type  :</h2>
       
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{info.transmissionType}</p>
                </div>
                </div>
                
           
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Price  :</h2>
   
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{info.price} ₹/day</p>
            </div>
                </div>
                
        
        </div>
     <button type='submit' className='booking' onClick={()=>handlebooking()}><span className='book'> Book Now! </span></button>
     {bookingMessage && <p className='bookingmessage'>{bookingMessage}</p>}
    </div>
    
    
    
    {/* <div className='innerinfo'>
        <div className='carinnerimage'>
           
        </div>
    </div> */}
    </>
    
  )
}




const carexterior=[
    {
    text:'Exterior',
    img:'./images/back(2).JPG'
    
    },
    {
        img:'./images/rear.JPG', 

    },

    // {
    //     img:'./images/left.JPG'
    // },
    // {
    //     img:'./images/front.JPG'
    // }
]

const carinterior=[
    {
    text:'Exterior',
    img:'./images/dash.JPG'
    
    },
    {
        img:'./images/frontseat.JPG', 

    },

    // {
    //     img:'./images/backseat.JPG'
    // },
    // {
    //     img:'./images/bootspace.JPG'
    // }
]

const segment=[
    {
        text:'Hatchback',
    }
]
const city=[
   { City:'Ahmedabad'}
]
const fuel=[
    {text:"CNG"}
]
const type=[
    {text:"Automatic"}
]
const price=[
    {Price:"300$/Day"}
]
export default Carinnerinfo
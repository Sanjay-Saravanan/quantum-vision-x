import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.svg'
import axios from 'axios';

function App() {
  const [camera,setCamera]=useState()

  // useEffect(()=>{
  //   if(camera)
  //     camera.map(((e)=>{
  //   console.log("camera",e.cameraNumber);
  //   console.log("Status",e.Status);
    
  //   }))
    
  // },[camera])

  useEffect(() => {
    const fetchCameraData = async () => {
      try {
        // Make a POST request to fetch camera status data
        const response = await axios.post('http://52.205.89.117:3001/user/getCameraStatus', {
          email: 'sanjay@abc.com'  // Replace with the actual email you're using
        });
        console.log(response.data.camStatus.cameraStatuses);
        setCamera(response.data.camStatus.cameraStatuses);
      } catch (err) {
        // setError(err.message);
        console.log("errror",err);
        // setLoading(false);
      }
    };

    fetchCameraData();
  }, []);



  return (
    <div>
      <div className='main'>
        <img src={logo} className='logo'/>
      </div>
      <div className='data'>

          <div  className='data1'>
              {camera && camera.map((cam, index) => (
                <div className={cam.Status==="Online"&&cam.Coverage!=="interuppted" ?"dataon":"dataoff"} key={index}>
                  <p>Camera : {cam.cameraNumber}</p>
                  <p>Status : {cam.Status}</p>
                  <p>Coverage : {cam.Coverage}    </p>
                </div>
              ))}
          
          </div>

      </div>
      
    </div>
  )
}

export default App

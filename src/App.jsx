import Navbar from './Components/Navbar';
import { useState } from 'react';
import './App.css'
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import FoundedDoctor from './Components/FoundedDoctor';
import axios from "axios";
// import Doctor from './Components/Doctor';

function App() {

  

  // useEffect(()=>{
  //   axios.get('/api/doctors')
  //   .then((response)=>{
  //     // console.log(response.data.doctors);
  //     return response.data.doctors;
  //   })
  //   .then((data)=>{
  //     // console.log(data);
  //     props.ondoctorHandler(data);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // })
  
  // const [docarea,setdocarea] = useState('');
  // const [docCategory,setdocCategory] = useState('');
  const [doctors,setdoctors] = useState([]);


  const searchHandler = (result) => {
    console.log(result);

    // console.log(`/api/doctors?area=${result.area}&category=${result.doctor}`);
    let query = '';
    if(result.area=='Select Area' && result.doctor=='Select Doctor')
      query = `/api/doctors`;
    else if(result.area=='Select Area')
      query = `/api/doctors?category=${result.doctor}`;
    else if(result.doctor=='Select Doctor')
      query = `/api/doctors?area=${result.area}`;
    else
      query = `/api/doctors?area=${result.area}&category=${result.doctor}`

    axios.get(query)
        .then((response)=>{
          console.log(response.data.doctors);
          setdoctors(response.data.doctors);
        })
        .catch((error)=>{
          console.log(error);
        })

  }
 
  return(
    <>
      <Navbar />
      <Section1 ondoctorHandler={searchHandler}/>
      <FoundedDoctor doctors={doctors}/>
      {/* <Outlet /> */}
      <Section2 />
      <Section3 />
    </>
  )
}

export default App

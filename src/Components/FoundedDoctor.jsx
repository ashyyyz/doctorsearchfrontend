import './FoundedDoctor.css';
import Doctor from './Doctor';
import { useEffect, useState } from 'react';
import axios from "axios";


const FoundedDoctor = (props) => {

  // const [query,setquery] = useState('');
  // if(props.area != 'Select Area' && props.category != 'Select Doctor'){
  //   if(props.area=='Select Area')
  //     setquery(`category=${props.category}`);
  //   if(props.category=='Select Doctor')
  //     setquery(`area=${props.area}`);
  //   else
  //     setquery(`area=${props.area}&category=${props.category}`)

  // }


    // const [doctors, setdoctors] = useState([]);

    // useEffect(()=>{
    //     axios.get(`/api/doctors`)
    //     .then((response)=>{
    //       // console.log(response.data.doctors);
    //       setdoctors(response.data.doctors);
    //     })
    //     .catch((error)=>{
    //       console.log(error);
    //     })
    //   })
    return(
        <div>
        {props.doctors.map(doctor => <Doctor key={doctor._id} source={doctor.image} name={doctor.name} experience={doctor.exp} specialist={doctor.category} location={doctor.area} about={doctor.info} />)}
        </div>
    );
}

export default FoundedDoctor;
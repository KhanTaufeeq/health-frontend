import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function AddBP() {
  const [systolic, setSystolic] = useState(0);
  const [diastolic, setDiastolic] = useState(0);
  const [timing, setTiming] = useState('');
  // const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();


  // const getCSRFToken = () => {
  //   axios.get('http://127.0.0.1:8000/bp/csrf/', {
  //     withCredentials: true,
  //   })
  //   .then((response) => {
  //     console.log(response.data.csrfToken);
  //     setCsrfToken(response.data.csrfToken);
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  // useEffect(() => {
  //   getCSRFToken();
  // }, [])

  const addBPData = () => {
    axios.post('https://health-backend-qcof.onrender.com/bp/add/', {
      'systolic' : systolic,
      'diastolic' : diastolic,
      'timing' : timing
    },
    {
      headers : {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
      navigate('/getbp');
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="bp-div">
        <h1>Today's BP data</h1>
        <div className="timing-div">
          <label htmlFor="timing">Timing: </label>
          <select value={timing} onChange={(event) => setTiming(event.target.value)}>
            <option value="">Select an option</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <div className="systolic-bp-div">
          <label for="systolic">Systolic: </label>
          <input type="number" name="systolic" id="systolic" onChange={(event) => setSystolic(event.target.value)} placeholder='enter systolic here...'/>
        </div>
        <div className="diastolic-bp-div">
          <label htmlFor="diastolic">Diastolic: </label>
          <input type="number" name="diastolic" id="diastolic" onChange={(event) => setDiastolic(event.target.value)} placeholder='enter diastolic here...'/>
        </div>
      </div>
      <button type="submit" onClick={addBPData}>Submit</button>
    </>
  )
}

export default AddBP
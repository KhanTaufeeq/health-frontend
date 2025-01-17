import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function AddDiabetes() {
  const [fasting, setFasting] = useState(0)
  const [random, setRandom] = useState(0)
  // const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();

  // const getCSRFToken = () => {
  //   axios.get('http://127.0.0.1:8000/diabetes/csrf/', {
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

  const addDiabetesData = () => {
    axios.post('http://127.0.0.1:8000/diabetes/add/', {
      'fasting_sugar': fasting,
      'random_sugar' : random
    },
    {
      headers : {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      navigate('/getdiabetes');
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <>
      <div className="diabetes-div">
        <h1>Today's Sugar Data</h1>
        <div className="diabetes-input">
          <div className="fasting-sugar-div">
            <label htmlFor="fasting-sugar">Fasting: </label>
            <input type="number" name="fasting-sugar" id="diabetes" onChange={(event) => setFasting(event.target.value)} placeholder='enter fasting here...'/>
          </div>
          <div className="random-sugar-div">
            <label htmlFor="random-sugar">Random: </label>
            <input type="number" name="random-sugar" id="random-sugar" onChange={(event) => setRandom(event.target.value)} placeholder='enter random here...'/>
          </div>
          <button type="submit" onClick={addDiabetesData}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default AddDiabetes;
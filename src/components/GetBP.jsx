import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function GetBP() {

  const [listBP, setListBP] = useState([]);

  useEffect(() => {
    axios.get('https://health-backend-qcof.onrender.com/bp/')
        .then((response) => {
          console.log(response.data);
          setListBP(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
  }, [])
  
  return (
    <>
      <div className="show-bp-div">
        <h1>Blood Pressure</h1>
        {
          listBP.map(bp => {
            return(
              <>
                <div className="bp-list" key={bp.id}>
                  <p>{bp.created_at}</p>
                  <h3>{bp.timing}</h3>
                  <h2>Systolic: {bp.systolic}</h2>
                  <h2>Diastolic: {bp.diastolic}</h2>
                </div>
                <hr />
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default GetBP
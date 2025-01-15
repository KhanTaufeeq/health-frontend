import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function GetDiabetes() {

  const [listDiabetes, setListDiabetes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/diabetes/')
    .then((response) => {
      console.log(response.data)
      setListDiabetes(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <div className="show-diabetes-div">
        <h1>Glucose Level</h1>
        {
          listDiabetes.map(diabetes => {
            return(
              <>
                <div className="diabetes-list">
                  <p>{diabetes.created_at}</p>
                  <h2>Fasting: {diabetes.fasting_sugar}</h2>
                  <h2>Random: {diabetes.random_sugar}</h2>
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

export default GetDiabetes
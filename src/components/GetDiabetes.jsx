import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import menu from '../assets/img/menu.svg';
import edit from '../assets/img/edit.svg';
import deleteImage from '../assets/img/deleteImg.svg';

function GetDiabetes() {

  const [listDiabetes, setListDiabetes] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showUpdateInterface, setShowUpdateInterface] = useState(false);

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

  const deleteDiabetes = (sugar_id) => {
    axios.delete(`http://127.0.0.1:8000/diabetes/delete/${sugar_id}/`)
      .then((response) => {
        console.log(response.data);
        setListDiabetes(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  };


  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleEditOptions = () => {
    setShowUpdateInterface(!showUpdateInterface);
  }

  return (
    <>
      <div className="show-diabetes-div">
        <h1>Glucose Level</h1>
        {
          listDiabetes.map(diabetes => {
            return (
              <>
                <div className="diabetes-list">
                  <img src={menu} alt="menu" id="menu" onClick={toggleOptions} />
                  {
                    showOptions && (
                      <div className="edit-icon-div">
                        <img src={edit} alt="edit" id="edit" onClick={toggleEditOptions}/>
                        <img src={deleteImage} alt="delete" id="delete" onClick={() => deleteDiabetes(diabetes.id)} />
                      </div>
                    )
                  }
                  {
                    showUpdateInterface && (
                      <div className="update-div">
                        <label htmlFor="update-fasting-input">Fasting: </label>
                        <input type="text" name="update-fasting" id="update-fasting-input" value={diabetes.fasting_sugar}/>
                        <br />
                        <label htmlFor="update-random-input">Random: </label>
                        <input type="text" name="update-random" id="update-random-input" value={diabetes.random_sugar}/>
                        <br />
                        <button type="submit">Update</button>
                      </div>
                    )
                  }
                  {
                    !showUpdateInterface && (
                      <>
                        <p>{diabetes.created_at}</p>
                        <h3>Fasting: {diabetes.fasting_sugar}</h3>
                        <h3>Random: {diabetes.random_sugar}</h3>
                      </>
                    )
                  }
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

export default GetDiabetes;
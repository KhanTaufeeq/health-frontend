import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import menu from "../assets/img/menu.svg";
import edit from "../assets/img/edit.svg";
import deleteImage from "../assets/img/deleteImg.svg";
import { useNavigate } from "react-router";

function GetDiabetes() {
  const [listDiabetes, setListDiabetes] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/diabetes/")
      .then((response) => {
        console.log(response.data);
        setListDiabetes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDiabetes = (sugar_id) => {
    axios
      .delete(`http://127.0.0.1:8000/diabetes/delete/${sugar_id}/`)
      .then((response) => {
        console.log(response.data);
        setListDiabetes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleOptions = (diabetes_id) => {
    setActiveMenu((prev_id) => (prev_id === diabetes_id ? null : diabetes_id));
  };

  const handleEdit = (diabetes) => {
    navigate('/updatediabetes', {state: {diabetes}})
  };

  return (
    <>
      <div className="show-diabetes-div">
        <h1>Glucose Level</h1>
        {listDiabetes.map((diabetes) => {
          return (
            <>
              <div className="diabetes-list" key={diabetes.id}>
                <img src={menu} alt="menu" id="menu" onClick={() => toggleOptions(diabetes.id)} />
                {activeMenu === diabetes.id && (
                  <div className="edit-icon-div">
                    <img
                      src={edit}
                      alt="edit"
                      id="edit"
                      onClick={() => handleEdit(diabetes)}
                    />
                    <img
                      src={deleteImage}
                      alt="delete"
                      id="delete"
                      onClick={() => deleteDiabetes(diabetes.id)}
                    />
                  </div>
                )}
                {
                  <>
                    <p>{diabetes.created_at}</p>
                    <h3>Fasting: {diabetes.fasting_sugar}</h3>
                    <h3>Random: {diabetes.random_sugar}</h3>
                  </>
                }
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}

export default GetDiabetes;

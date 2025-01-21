import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import menu from "../assets/img/menu.svg";
import edit from "../assets/img/edit.svg";
import deleteImage from "../assets/img/deleteImg.svg";
import { useNavigate} from "react-router";

function GetBP() {
  const [listBP, setListBP] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/bp/")
      .then((response) => {
        console.log(response.data);
        setListBP(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const deleteBP = (id) => {
    axios.delete(`http://127.0.0.1:8000/bp/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
    })
  }

  const handleEdit = (bp) => {
    navigate('/updatebp', { state: { bp } });
  }

  return (
    <>
      <div className="show-bp-div">
        <h1>Blood Pressure</h1>
        {listBP.map((bp) => {
          return (
            <>
              <div className="bp-list" key={bp.id}>
                <img src={menu} alt="menu" id="menu" onClick={toggleOptions} />
                {showOptions && (
                  <div className="edit-icon-div">
                    <img
                      src={edit}
                      alt="edit"
                      id="edit"
                      onClick={() => handleEdit(bp)}
                    />
                    <img
                      src={deleteImage}
                      alt="delete"
                      id="delete"
                      onClick={() => deleteBP(bp.id)}
                    />
                  </div>
                )}
                <p>{bp.created_at}</p>
                <h3>{bp.timing}</h3>
                <h2>Systolic: {bp.systolic}</h2>
                <h2>Diastolic: {bp.diastolic}</h2>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}

export default GetBP;

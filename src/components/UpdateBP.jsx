import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

function UpdateBP() {
  const location = useLocation();
  const bp = location.state?.bp;
  const navigate = useNavigate();

  const [systolic, setSystolic] = useState(bp.systolic);
  const [diastolic, setDiastolic] = useState(bp.diastolic);
  const [timing, setTiming] = useState(bp.timing);

  const updateData = (id) => {
    axios
      .put(`http://127.0.0.1:8000/bp/update/${id}/`, {
        systolic: systolic,
        diastolic: diastolic,
        timing: timing,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/getbp");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="update-bp-div">
        <h2>Update BP Data</h2>
        <div className="update-bp-input-div">
          <div className="update-bp-timing">
            <label htmlFor="update-timing">Timing: </label>
            <select
              name="timing"
              id="update-timing"
              value={timing}
              onChange={(event) => setTiming(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="update-bp-systolic-div">
            <label htmlFor="update-systolic">Systolic: </label>
            <input
              type="number"
              name="systolic"
              id="update-systolic"
              value={systolic}
              onChange={(event) => setSystolic(event.target.value)}
            />
          </div>
          <div className="update-bp-diastolic-div">
            <label htmlFor="update-diastolic">Diastolic: </label>
            <input
              type="number"
              name="systolic"
              id="update-systolic"
              value={diastolic}
              onChange={(event) => setDiastolic(event.target.value)}
            />
          </div>
          <div className="update-cancel-div">
            <button type="submit" onClick={() => updateData(bp.id)}>
              Update
            </button>
            <button type="button" onClick={() => navigate("/getbp")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBP;

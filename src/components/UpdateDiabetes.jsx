import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function UpdateDiabetes() {
    const location = useLocation();
    const navigate = useNavigate();

    const diabetes = location.state?.diabetes;

    if (!diabetes) {
        return <p>No data available to update!</p>;
    }

    const [fastingSugar, setFastingSugar] = useState(diabetes.fasting_sugar);
    const [randomSugar, setRandomSugar] = useState(diabetes.random_sugar);

    const updateData = (id) => {
        axios
            .put(`http://127.0.0.1:8000/diabetes/update/${id}/`, {
                fasting_sugar: fastingSugar,
                random_sugar: randomSugar,
            })
            .then((response) => {
                console.log(response.data);
                navigate("/getdiabetes");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <h2>Update Glucose Data</h2>
            <div className="update-div">
                <div className="update-fasting-div">
                    <label htmlFor="update-fasting-input">Fasting: </label>
                    <input
                        type="text"
                        name="update-fasting-sugar"
                        id="update-fasting-input"
                        value={fastingSugar}
                        onChange={(event) => setFastingSugar(event.target.value)}
                    />
                </div>
                <div className="update-random-div">
                    <label htmlFor="update-random-input">Random: </label>
                    <input
                        type="text"
                        name="update-random-sugar"
                        id="update-random-input"
                        value={randomSugar}
                        onChange={(event) => setRandomSugar(event.target.value)}
                    />
                </div>
                <div className="update-cancel-div">
                    <button type="submit" onClick={() => updateData(diabetes.id)}>
                        Update
                    </button>
                    <button type="button" onClick={() => navigate("/getdiabetes")}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
}

export default UpdateDiabetes;

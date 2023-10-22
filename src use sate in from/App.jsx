import React, { useState } from "react";

const App = () => {
  const [formObj, setFormObj] = useState({
    fname: "",
    lname: "",
    city: "",
    gender: ""
  });

  const onInput = (property, value) => {
    setFormObj(prevObj => ({
      ...prevObj,
      [property]: value
    }));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={formObj.fname}
          placeholder="First Name"
          onChange={(e) => onInput("fname", e.target.value)}
        />
        <br />
        <input
          type="text"
          value={formObj.lname}
          placeholder="Last Name"
          onChange={(e) => onInput("lname", e.target.value)}
        />
        <br />
        <select
          value={formObj.city}
          onChange={(e) => onInput("city", e.target.value)}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input
          type="radio"
          checked={formObj.gender === "Male"}
          onChange={() => onInput("gender", "Male")}
          name="gender"
        />Male
        <input
          type="radio"
          checked={formObj.gender === "Female"}
          onChange={() => onInput("gender", "Female")}
          name="gender"
        />Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

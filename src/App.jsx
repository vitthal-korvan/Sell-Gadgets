import emailjs from "emailjs-com";
import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    hobbies: {
      reading: false,
      traveling: false,
      sports: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: {
          ...prevData.hobbies,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedHobbies = Object.keys(formData.hobbies)
      .filter((hobby) => formData.hobbies[hobby])
      .join(", ");

    const emailData = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      gender: formData.gender,
      hobbies: selectedHobbies,
    };

    emailjs
      .send(
        "service_htxxlys",
        "template_qlpg033",
        emailData,
        "pTDs-lKL96Apcs-So"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div className="App">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              required
            />
            Other
          </label>
        </div>

        <div>
          <label>Hobbies: </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.hobbies.reading}
              onChange={handleChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="traveling"
              checked={formData.hobbies.traveling}
              onChange={handleChange}
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.hobbies.sports}
              onChange={handleChange}
            />
            Sports
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import QualificationInfo from "./components/QualificationInfo";

const initialState = {
  firstName: "", lastName: "",
  day: "", month: "", year: "",
  email: "", mobile: "", gender: "",
  address: "", city: "", pinCode: "", state: "", country: "",
  hobbies: { Drawing: false, Singing: false, Dancing: false, Sketching: false, Others: "" },
  qualification: [
    { exam: "Class X",    board: "", percentage: "", yearOfPassing: "" },
    { exam: "Class XII",  board: "", percentage: "", yearOfPassing: "" },
    { exam: "Graduation", board: "", percentage: "", yearOfPassing: "" },
    { exam: "Masters",    board: "", percentage: "", yearOfPassing: "" },
  ],
  course: "",
};

export default function App() {
  const [form, setForm]           = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim() || !/^[a-zA-Z]{1,30}$/.test(form.firstName))
      e.firstName = "Required / letters only (max 30)";
    if (!form.lastName.trim() || !/^[a-zA-Z]{1,30}$/.test(form.lastName))
      e.lastName = "Required / letters only (max 30)";
    if (!form.day || !form.month || !form.year)
      e.dob = "Select full date";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^\d{10}$/.test(form.mobile))
      e.mobile = "Must be 10 digits";
    if (!form.gender)
      e.gender = "Select gender";
    if (!form.address.trim())
      e.address = "Required";
    if (!form.city.trim() || !/^[a-zA-Z ]{1,30}$/.test(form.city))
      e.city = "Required / letters only (max 30)";
    if (!/^\d{6}$/.test(form.pinCode))
      e.pinCode = "Must be 6 digits";
    if (!form.state.trim() || !/^[a-zA-Z ]{1,30}$/.test(form.state))
      e.state = "Required / letters only (max 30)";
    if (!form.country.trim())
      e.country = "Required";
    if (!form.course)
      e.course = "Select a course";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div id="successPage">
        <div className="success-box">
          <h2>Registration Successful!</h2>
          <p>Welcome, <strong>{form.firstName} {form.lastName}</strong>!</p>
          <p>Applied for: <strong>{form.course}</strong></p>
          <button onClick={handleReset}>Register Another</button>
        </div>
      </div>
    );
  }

  return (
    <div id="mainPage">
      <div className="top-bar">
        <h1>STUDENT REGISTRATION FORM</h1>
      </div>
      <div className="form-body">
        <form onSubmit={handleSubmit} noValidate>
          <PersonalInfo form={form} setForm={setForm} errors={errors} />
          <AddressInfo  form={form} setForm={setForm} errors={errors} />
          <QualificationInfo form={form} setForm={setForm} />

          {/* Courses Applied For */}
          <div className="row" style={{ marginTop: "10px", alignItems: "flex-start" }}>
            <span className="lbl">COURSES<br />APPLIED FOR</span>
            <div>
              <div className="radio-wrap">
                {["BCA", "B.Com", "B.Sc", "B.A"].map((c) => (
                  <label key={c}>
                    <input
                      type="radio"
                      name="course"
                      value={c}
                      checked={form.course === c}
                      onChange={() => setForm({ ...form, course: c })}
                    />
                    {" "}{c}
                  </label>
                ))}
              </div>
              {errors.course && <span className="err-msg show">{errors.course}</span>}
            </div>
          </div>

          {/* Buttons */}
          <div className="btns">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
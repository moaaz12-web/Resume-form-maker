import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import CustomInput from "../../components/CustomInput";
import "../Signup/Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  //add a User
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .post("/user/signup", form)
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      {/* <div className="App">{isLoading ? <LoadingSpinner /> : ""}</div> */}

      <div className="col-lg-4 col-md-6 mt-20 col-sm-8 mx-auto">
        <div
          className="p-6 shadow-lg mb-5 bg-body rounded-xl border-2 border-slate-500"
          style={{ backgroundColor: "white" }}
        >
          <form class="form-group" onSubmit={onSubmitHandler}>
            <CustomInput
              label="Name"
              placeholder="name"
              type="text"
              name="name"
              icon={<FaUser />}
              onChange={onChangeHandler}
              errors={errors.name}
            />
            <CustomInput
              label="Email"
              placeholder="name@exemple.com"
              type="text"
              name="email"
              icon={<FaEnvelope />}
              onChange={onChangeHandler}
              errors={errors.email}
            />
            <CustomInput
              label="Password"
              placeholder="password"
              type="password"
              name="password"
              icon={<FaLock />}
              onChange={onChangeHandler}
              errors={errors.password}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              Register
            </button>
            <hr />
            <h6>
              Already have an account? {FaEnvelope} <Link to="/signin"><span className="font-bold underline">Sign in</span></Link> here
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

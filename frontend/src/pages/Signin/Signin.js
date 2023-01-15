import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaEnvelope } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import "../Signin/Signin.css";
import FacebookAuth from "../../components/FacebookAuth/FacebookAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //User signin
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
      .post("/user/signin", form)
      .then((response) => {
        const token = response.data.token;
        // Save token to localStorage
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(response.data.user));

        window.location.reload(false);
        setTimeout(() => {
          navigate("/");
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
  };
  const informParent = (response) => {
    setIsLoading(true);
    const token = response.data.token;
    // Save token to localStorage
    localStorage.setItem("user-token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    window.location.reload(false);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container" onSubmit={onSubmitHandler}>
      <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <div
          className="p-6 shadow-lg mt-20 mb-5 bg-body rounded-xl border-2 border-slate-500"
          style={{ backgroundColor: "white" }}
        >
          <form className="form-group">
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
              password
            />
            <button className="submit" type="submit">
              Sign in
            </button>
            <div className="flex flex-col items-center px-3 mb-4">
              <div className="line"></div>
              <p><span className="or text-center text-lg">Or</span></p>
              <div className="line"></div>
            </div>

            <div className="flex flex-col mb-3 gap-2 items-center social-media">
              <GoogleAuth informParent={informParent} />
              <FacebookAuth informParent={informParent} />
            </div>
            <h6>
              If you dont have an account yet,{" "}
              <Link to="/signup"><span className="font-bold underline">Create One</span></Link> here!
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="App">{isLoading ? <LoadingSpinner /> : renderSignin}</div>
  // );
}

export default Signin;
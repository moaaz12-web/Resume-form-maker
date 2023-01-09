import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "../FacebookAuth/FacebookAuth.css";
import { SlSocialFacebook } from "react-icons/sl";

function FacebookAuth({ informParent }) {
  const responseFacebook = async (response) => {
    console.log(response);
    try {
      const result = await axios.post("/user/facebook-login", {
        userID: response.userID,
        accessToken: response.accessToken,
      });

      informParent(result);
      console.log(result);
    } catch (error) {
      console.log("Facebook SIGNIN ERROR", error.response);
    }
  };

  return (
    <div>
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
        fields="name,email,picture"
        autoLoad={false}
        callback={(res) => responseFacebook(res)}
        render={(renderProps) => (
          <button
            className="bg-blue-700 hover:bg-blue-800 rounded-full w-60 font-semibold text-white flex py-2 px-4"
            onClick={renderProps.onClick}
          >
            <SlSocialFacebook
              style={{
                fontSize: "26px",
                fontWeight: "900",
                marginRight: "8px",
              }}
            /> Sign in with Facebook
          </button>
        )}
      />
    </div>
  );
}

export default FacebookAuth;

import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { gapi } from "gapi-script";
import "../GoogleAuth/GoogleAuth.css";
import { GrGooglePlus } from "react-icons/gr";

const GoogleAuth = ({ informParent }) => {
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", initClient);
  });

  const responseGoogle = async (response) => {
    try {
      const result = await axios.post(
        "/user/google-login",
        { idToken: response.tokenId },
        { withCredentials: true }
      );

      informParent(result);
      console.log(result);
    } catch (error) {
      console.log("GOOGLE SIGNIN ERROR", error.response);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            className="bg-red-500 hover:bg-red-600 rounded-full w-60 font-semibold text-white flex py-2 px-4"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GrGooglePlus
              style={{
                fontSize: "26px",
                fontWeight: "900",
                marginRight: '8px',
                marginLeft: '8px'
              }}
            /> Sign in with Google
          </button>
        )}
      />
    </div>
  );
};

export default GoogleAuth;

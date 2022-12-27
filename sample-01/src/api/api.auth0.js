// import React, { useState } from "react";
import { getConfig } from "../config";
// import { useAuth0 } from "@auth0/auth0-react";

const config = getConfig();
const api_url_resendEmail = "https://"+config.domain+"/api/v2/jobs/verification-email";

function Api_auth0_resendEmail(user_id){
    var axios = require("axios").default;
    var params =JSON.stringify( {
      "user_id": user_id
    });
    console.log("params",params);
    console.log(api_url_resendEmail);
    const headers = { 
      "content-type": "application/json",
      "Authorization": config.token
    };
    return new Promise(function (resolve, reject) {
        axios.post(api_url_resendEmail, params,{
            "headers": headers,
        })
        .then(res=>{
            console.log(res.data);
            resolve(res);
        })
        .catch(err=>{
            console.log(err);
            reject(err);
        })
    });
};


export {Api_auth0_resendEmail};
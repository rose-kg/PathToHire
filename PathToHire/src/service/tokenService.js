import { jwtDecode } from "jwt-decode";

const CheckTokenExpiration = () => {
  var token = localStorage.getItem("token");

  if (jwtDecode(token).exp < Date.now() / 1000) {
    console.log("Token has expired.");
    //Clear local storage and log user out

    localStorage.clear();
    window.location.href = "/";
  }

  console.log("Token still active");
};

export default { CheckTokenExpiration };
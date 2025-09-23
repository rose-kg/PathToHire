import axios from "axios";

const axiosConfig = axios.create();

const checkAuth = () => {
  /*  Getting token value stored in localstorage, if token is not present we will open login page 
    for all internal dashboard routes  */

  const TOKEN = localStorage.getItem("token");

  const PUBLIC_ROUTES = [
    "login",
    "forgot-password",
    "register",
    "documentation",
    "verify-account",
    "document-upload",
  ];

  const isPublicPage = PUBLIC_ROUTES.some((r) =>
    window.location.href.includes(r)
  );

  if (!TOKEN && !isPublicPage) {
    window.location.href = "/login";
    return;
  } else {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

    axiosConfig.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("token");

        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // axiosConfig.interceptors.response.use(
    //   (response) => {
    //     return response;
    //   },
    //   async (error) => {
    //     const originalRequest = error.config;

    //     try {
    //       if (error.response.status === 401 && !originalRequest._retry) {
    //         originalRequest._retry = true;

    //         const response = await axios.get(
    //           `${process.env.REACT_APP_FMS_API_URL}GetToken`
    //         );
    //         const newAccessToken = response.data.result;
    //         localStorage.setItem("token", newAccessToken); //set new access token
    //         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    //         return axios(originalRequest);
    //       }
    //       return Promise.reject(error);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // );

    // axiosConfig.get(process.env.REACT_APP_BASE_URL);
  }
};

export default checkAuth;

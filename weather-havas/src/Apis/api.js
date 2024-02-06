import axios from "axios";

const apiURL = "https://api.weatherbit.io/v2.0/forecast/daily";
const token = "aa7c69fc0662465b9a53a74b2996b03a";

export const fetchCurrentOrGivenLocationData = (cityName) => {
  if (cityName) {
    return axios.get(`${apiURL}?city=${cityName}&key=${token}`);
  } else {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            axios
              .get(`${apiURL}?lat=${latitude}&lon=${longitude}&key=${token}`)
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => {
                reject(error);
              });
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }
};

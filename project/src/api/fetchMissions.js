import axios from "axios";

// can break out code from App.js into a component
// need the return in order to return a promise that'll allow us to chain in App.js
// need to return res and err in order to mock it in the test file 
export const fetchMissions = () => {
    return axios
        .get("https://api.spacexdata.com/v3/missions")
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.error("error fetching data from api, err: ", err.message);
            return err;
        });
}
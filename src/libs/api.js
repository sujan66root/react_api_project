import axios from "axios";

export const fetchData = () => {
  return (
    axios
      .get("https://gss.wscada.net/api/socket/dhap/response")
      // .get("https://hydrology.gov.np/gss/api/socket/simikot_test/response")
      // fetch code here
      .then((response) => {
        return response;
      })
  );
};

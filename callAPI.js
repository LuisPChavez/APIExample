const axios = require("axios");

(async () => {
  //   let config = {
  //     params: {
  //       id: 123
  //     }
  //   };

  //   let res = await axios.get("http://localhost:3000/getUserById?id=789");

  let body = {
    id: 456
  };

  let res = await axios.put("http://localhost:3000/addUser", body);
  console.log(res.data);
})();

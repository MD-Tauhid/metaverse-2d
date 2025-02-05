const axios = require("axios");

function sum(a, b) {
  return a + b;
}

const BACKEND_URL = "http://localhost:3000";

describe("Authentication", () => {
  test("User is able to signup", async () => {
    const username = "tauhid" + Math.random();
    const password = "123456";
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      username,
      password,
    });
    expect(response.statusCode).toBe(200);

    const updatedResponse = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      username,
      password,
    });
    expect(updatedResponse.statusCode).toBe(400)
  });
});

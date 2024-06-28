import axios from "axios";
const user = JSON.parse(localStorage.getItem("user")) || {};
const token = localStorage.getItem("token");
export const http = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api/",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMSIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwNDk5MjQwMCwiZXhwIjoxNzI5MjcwODAwfQ.e_09en7cnMlh5fiMZWSMobMs9zSCjIXHgq-eMFxPlqg",
    token: token,
  },
});

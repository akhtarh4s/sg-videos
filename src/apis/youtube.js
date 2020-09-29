import axios from "axios";

const KEY = "AIzaSyD63Bu0LzucddUzdiBqS_npqZjDAf0QcOg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
  },
});

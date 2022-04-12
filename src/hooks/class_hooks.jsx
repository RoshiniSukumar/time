import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
function Class_hooks() {
  var fun = () => {
    return axios.get("http://localhost:2000/class");
  };
  return useQuery("class", fun);
}

export default Class_hooks;

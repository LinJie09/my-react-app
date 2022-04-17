import React, { useState } from "react";
import axios from "axios";
import "./apiTest.css";

export default function ApiTest() {
  const [item, setItem] = useState("");
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);
    data.append("album", "Dd2CkMJ");
    data.append("title", image.name);
    const res = await axios({
      method: "POST",
      url: "https://api.imgur.com/3/image",
      data,
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    });
    setItem(res.data.data.link);
    console.log("response >>", res);
    console.log("link >>", res.data.data.link);
  };
  console.log("apiItem >>", item);
  return (
    <div className="file-picture">
      <label htmlFor="upload-btn">
        <img src="./icons/upload.png"></img>
      </label>
      <input
        id="upload-btn"
        type="file"
        style={{ display: "none" }}
        onChange={onFileUpload}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./apiTest.css";

export default function ApiTest() {
  const [item, setItem] = useState("");
  const [album, setAblum] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const albumImages = await axios({
        method: "GET",
        url: "https://api.imgur.com/3/album/Dd2CkMJ/images",
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      });
      setAblum(albumImages.data.data);
    };
    getImages();
  }, [item]);
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
  };
  return (
    <div className="file-picture">
      {album.map((item, index) => (
        <img key={`image${index}`} src={item.link} width={100} />
      ))}

      <div className="put-in-pc">
        <label htmlFor="upload-btn">
          <img src={item || "./icons/upload.png"}></img>
        </label>
        <input
          id="upload-btn"
          type="file"
          style={{ display: "none" }}
          onChange={onFileUpload}
        />
        <div className="text-container1">
          Drag and drop up toImages
          <div className="text-container2">
            or <span className="text">Browse</span> to choose a files
          </div>
        </div>
      </div>
    </div>
  );
}

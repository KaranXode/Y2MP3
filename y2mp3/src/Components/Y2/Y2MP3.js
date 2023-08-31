import { React, useRef, useState } from "react";
import { youtube_parser } from "../../Utils";
import axios from "axios";

function Y2MP3() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "a13fc42008msha52c563a25e05e7p120004jsn8403cdd23ec3",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };

  return (
    <>
      <div className="youtube-main ">
        <h1 className="youtube-main_title">Youtube To MP3 Downloader</h1>
        <p className="youtube-main_description">
          Transform YouTube videos into MP3s in just a few clicks!
        </p>
        <form onSubmit={handleSubmit} className="form">
          <input
            ref={inputUrlRef}
            type="text"
            placeholder="Paste a Youtube video URL link..."
            className="form_input"
          ></input>
          <button type="submit" className="form_button">Search</button>
        </form>
        {urlResult ? (
          <a target="_blank" href={urlResult} rel="noreferrer" className="download_btn">
            Download
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Y2MP3;

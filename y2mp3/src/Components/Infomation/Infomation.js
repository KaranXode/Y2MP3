import React from "react";
import Cards from "../Cards/Cards";

export default function Infomation() {
  return (
    <div>
      <div className="section2">
        <div>
          <h1 className="mb-16">Online YouTube to MP3 Converter</h1>
          <p>
            <span className="">Y2MP3</span> is the most popular Youtube to mp3
            converter, many people use it every day to convert their favorite
            videos to MP3 format (audio). Our Y2MP3 converter is the best Music
            Search Engine to get free music every day. With its help you can
            download mp3s on phones, tablets and computer. Saving mp3 files from
            Youtube with this tool is much easier and safer using our Youtube
            Video Converter web app.
          </p>
        </div>
        <div className="info-card">
          <Cards title="Free Instant Downloads" content="Y2MP3 offers free conversion of Youtube videos to mp3 files, Our service is fast enough to Convert and Download multiple files at the same time, Don't you believe it? try it now!" ic='https://img.icons8.com/glyph-neue/64/download--v1.png'/>
          <Cards title="High Sound Qualities" content='We support various sound quality from the lowest to the highest, depending on your needs and the space you have on your device, you can choose any of the following: 64kbps, 128kbps, 192kbps, 256kbps and 320kbps.'  ic="https://img.icons8.com/ios/50/hd.png"  />
          <Cards title='Unlimited Downloads' content="Downloads are much faster when you know that there is no download limit, all mp3 files are saved at a very high speed, that's why we don't have a download limit."  ic='https://img.icons8.com/pastel-glyph/64/speed.png' icAnim="rotate"/>
          <Cards title='Youtube MP3 Downloader' content='We have the best MP3 converter and downloader because we extract the mp3 file from a yt video in just seconds without you installing anything.' ic="https://img.icons8.com/ios/50/internet--v1.png" />
        </div>
      </div>
    </div>
  );
}
